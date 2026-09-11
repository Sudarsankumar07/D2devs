import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

const localReviewsFile = path.resolve(process.cwd(), 'api/reviews.local.json')

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

// https://vite.dev/config/
export default defineConfig({
  plugins: [localReviewsApi(), react(), tailwindcss()],
})
