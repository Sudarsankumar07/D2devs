import { head, put } from '@vercel/blob';

/**
 * Serverless function (Vercel) — stores community reviews in Vercel Blob.
 * GET    /api/reviews              -> { reviews: Testimonial[] }
 * POST   /api/reviews              -> body: Testimonial  -> appends & returns updated list
 * DELETE /api/reviews?id=<id>      -> removes one review (admin)
 * DELETE /api/reviews              -> removes ALL reviews (admin)
 *
 * Uses BLOB_READ_WRITE_TOKEN which Vercel injects automatically in production.
 * Locally (npm run dev) this file isn't served; the frontend falls back to
 * localStorage in that case.
 */

const BLOB_KEY = 'reviews/d2devs-community-reviews.json';

interface StoredReview {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  buildId: string;
  rating?: number;
  product?: string;
  source?: string;
  createdAt?: string;
}

async function readReviews(): Promise<StoredReview[]> {
  try {
    const blob = await head(BLOB_KEY);
    const res = await fetch(blob.url);
    if (!res.ok) return [];
    const data = (await res.json()) as { reviews?: StoredReview[] };
    return Array.isArray(data.reviews) ? data.reviews : [];
  } catch {
    // Blob doesn't exist yet — first ever review
    return [];
  }
}

export default async function handler(req: { method?: string; body?: StoredReview; query?: Record<string, string | string[] | undefined> }, res: {
  status: (code: number) => { json: (data: unknown) => void };
}) {
  try {
    if (req.method === 'GET') {
      const reviews = await readReviews();
      return res.status(200).json({ reviews });
    }

    if (req.method === 'POST') {
      const review = req.body;
      // Basic server-side validation
      if (
        !review ||
        typeof review.quote !== 'string' ||
        typeof review.author !== 'string' ||
        !review.quote.trim() ||
        !review.author.trim()
      ) {
        return res.status(400).json({ error: 'Invalid review payload' });
      }
      if (typeof review.quote !== 'string' || review.quote.length > 1000) {
        return res.status(400).json({ error: 'Review too long (max 1000 chars)' });
      }

      const reviews = await readReviews();
      const updated = [review, ...reviews].slice(0, 500); // cap total stored reviews

      await put(BLOB_KEY, JSON.stringify({ reviews: updated }), {
        access: 'public',
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: 'application/json',
      });

      return res.status(200).json({ reviews: updated });
    }

    if (req.method === 'DELETE') {
      // Admin maintenance: remove one review (?id=...) or all (no id).
      // Guarded by ADMIN_DELETE_TOKEN — only you know this secret.
      const token = req.query?.token;
      const tokenValue = Array.isArray(token) ? token[0] : token;
      if (!process.env.ADMIN_DELETE_TOKEN || tokenValue !== process.env.ADMIN_DELETE_TOKEN) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const idParam = req.query?.id;
      const idValue = Array.isArray(idParam) ? idParam[0] : idParam;

      const updated = idValue
        ? (await readReviews()).filter((r) => r.id !== idValue)
        : [];

      await put(BLOB_KEY, JSON.stringify({ reviews: updated }), {
        access: 'public',
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: 'application/json',
      });

      return res.status(200).json({ reviews: updated, deleted: idValue || 'ALL' });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('[/api/reviews] error:', err);
    return res.status(500).json({ error: 'Failed to process review' });
  }
}
