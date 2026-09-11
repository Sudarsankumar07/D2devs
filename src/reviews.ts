import type { Testimonial } from './types';
import { TESTIMONIALS } from './data';

const REVIEWS_KEY = 'd2devs_community_reviews';

const mergeReviews = (reviews: Testimonial[]): Testimonial[] => {
  const merged = new Map<string, Testimonial>();
  [...TESTIMONIALS, ...reviews].forEach((review) => merged.set(review.id, review));
  return [...merged.values()];
};

/** Reads reviews from the /api/reviews serverless function (Vercel Blob).
 *  Falls back to localStorage when the API is unreachable (local dev). */
export const loadCommunityReviews = async (): Promise<Testimonial[]> => {
  try {
    const res = await fetch('/api/reviews');
    if (!res.ok) throw new Error(`API error ${res.status}`);
    const data = await res.json();
    if (Array.isArray(data.reviews)) {
      // keep a local cache in sync for offline/dev use
      try {
        localStorage.setItem(REVIEWS_KEY, JSON.stringify(data.reviews));
      } catch {
        /* ignore */
      }
      return mergeReviews(data.reviews as Testimonial[]);
    }
    throw new Error('Unexpected API response');
  } catch {
    // API unavailable (local dev without Vercel) — fall back to localStorage
    try {
      const raw = localStorage.getItem(REVIEWS_KEY);
      if (!raw) return [];
      return mergeReviews(JSON.parse(raw) as Testimonial[]);
    } catch {
      return [];
    }
  }
};

/** Submits a review to the serverless function so it's visible to ALL visitors.
 *  Falls back to localStorage-only (visible on this device) if the API is down. */
export const saveCommunityReview = async (review: Testimonial): Promise<Testimonial[]> => {
  try {
    const res = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review),
    });
    if (!res.ok) throw new Error(`API error ${res.status}`);
    const data = await res.json();
    if (Array.isArray(data.reviews)) {
      try {
        localStorage.setItem(REVIEWS_KEY, JSON.stringify(data.reviews));
      } catch {
        /* ignore */
      }
      return mergeReviews(data.reviews as Testimonial[]);
    }
    throw new Error('Unexpected API response');
  } catch {
    // API unavailable — keep the review locally on this device
    const local = [review, ...loadLocalReviews()];
    try {
      localStorage.setItem(REVIEWS_KEY, JSON.stringify(local));
    } catch {
      /* ignore */
    }
    return mergeReviews(local);
  }
};

const loadLocalReviews = (): Testimonial[] => {
  try {
    const raw = localStorage.getItem(REVIEWS_KEY);
    if (!raw) return [];
    return mergeReviews(JSON.parse(raw) as Testimonial[]);
  } catch {
    return [];
  }
};

export const buildMailtoLink = (review: Testimonial): string => {
  const subject = encodeURIComponent(`New Client Review — ${review.product || 'D²devs Build'}`);
  const body = encodeURIComponent(
    [
      `Name: ${review.author}`,
      `Role: ${review.role}`,
      `Company: ${review.company}`,
      `Email: ${review.email || '—'}`,
      `Product Built: ${review.product || '—'}`,
      `Rating: ${review.rating}/5`,
      '',
      `Review:`,
      review.quote,
    ].join('\n')
  );
  return `mailto:contact@d2devs.in?subject=${subject}&body=${body}`;
};

