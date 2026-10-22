export const recordVisitor = async (): Promise<number> => {
  const response = await fetch('/api/visitors', {
    method: 'POST',
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Visitor API error ${response.status}`);
  }

  const data = (await response.json()) as { count?: unknown };
  if (typeof data.count !== 'number' || !Number.isSafeInteger(data.count) || data.count < 1) {
    throw new Error('Unexpected visitor API response');
  }

  return data.count;
};
