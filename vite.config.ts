import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

const localReviewsFile = path.resolve(process.cwd(), 'api/reviews.local.json')
const localVisitorsFile = path.resolve(process.cwd(), 'api/visitors.local.json')

const localReviewsApi = () => ({
  name: 'local-reviews-api',
  configureServer(server: { middlewares: { use: (route: string, handler: (req: any, res: any, next: () => void) => void) => void } }) {
    server.middlewares.use('/api/reviews', (req, res, next) => {
      if (!req.method || !['GET', 'POST', 'DELETE'].includes(req.method)) {
        next()
        return
      }

      const readReviews = () => {
        try {
          return JSON.parse(fs.readFileSync(localReviewsFile, 'utf8'))
        } catch {
          return []
        }
      }

      const send = (status: number, data: unknown) => {
        res.statusCode = status
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data))
      }

      if (req.method === 'GET') {
        send(200, { reviews: readReviews() })
        return
      }

      let body = ''
      req.on('data', (chunk: Buffer) => {
        body += chunk.toString()
      })
      req.on('end', () => {
        const reviews = readReviews()
        if (req.method === 'POST') {
          try {
            const review = JSON.parse(body)
            const updated = [review, ...reviews.filter((item: { id?: string }) => item.id !== review.id)].slice(0, 500)
            fs.writeFileSync(localReviewsFile, JSON.stringify(updated, null, 2))
            send(200, { reviews: updated })
          } catch {
            send(400, { error: 'Invalid review payload' })
          }
          return
        }

        const id = new URL(req.url || '', 'http://localhost').searchParams.get('id')
        const updated = id ? reviews.filter((review: { id?: string }) => review.id !== id) : []
        fs.writeFileSync(localReviewsFile, JSON.stringify(updated, null, 2))
        send(200, { reviews: updated, deleted: id || 'ALL' })
      })
    })
  },
})

const localVisitorsApi = () => ({
  name: 'local-visitors-api',
  configureServer(server: { middlewares: { use: (route: string, handler: (req: any, res: any, next: () => void) => void) => void } }) {
    server.middlewares.use('/api/visitors', (req, res, next) => {
      if (req.method !== 'POST') {
        if (req.method) {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed' }))
        } else {
          next()
        }
        return
      }

      let count = 0
      try {
        const stored = JSON.parse(fs.readFileSync(localVisitorsFile, 'utf8')) as { count?: unknown }
        if (typeof stored.count === 'number' && Number.isSafeInteger(stored.count) && stored.count >= 0) {
          count = stored.count
        }
      } catch {
        // Start the local counter when no local data file exists yet.
      }

      count += 1
      fs.writeFileSync(localVisitorsFile, JSON.stringify({ count }, null, 2))
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ count }))
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [localReviewsApi(), localVisitorsApi(), react(), tailwindcss()],
})
