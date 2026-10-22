import { BlobNotFoundError, head, put } from '@vercel/blob';

const BLOB_KEY = 'analytics/d2devs-visitors.json';

interface VisitorData {
  count: number;
}

const readVisitorCount = async (): Promise<number> => {
  try {
    const blob = await head(BLOB_KEY);
    const response = await fetch(blob.url);
    if (!response.ok) {
      throw new Error(`Visitor data request failed with status ${response.status}`);
    }

    const data = (await response.json()) as Partial<VisitorData>;
    return typeof data.count === 'number' && Number.isSafeInteger(data.count) && data.count >= 0
      ? data.count
      : 0;
  } catch (error) {
    if (error instanceof BlobNotFoundError) {
      return 0;
    }
    throw error;
  }
};

export default async function handler(
  req: { method?: string },
  res: { status: (code: number) => { json: (data: unknown) => void } },
) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.error('[/api/visitors] BLOB_READ_WRITE_TOKEN is not configured');
      return res.status(503).json({ error: 'Visitor counter is not configured' });
    }

    const count = (await readVisitorCount()) + 1;
    await put(BLOB_KEY, JSON.stringify({ count }), {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: 'application/json',
    });

    return res.status(200).json({ count });
  } catch (error) {
    console.error('[/api/visitors] error:', error);
    return res.status(500).json({ error: 'Failed to update visitor count' });
  }
}
