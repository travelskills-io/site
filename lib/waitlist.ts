import { WAITLIST_COUNT } from './content';

const LIST_ID = Number(process.env.BREVO_LIST_ID ?? 5);

// Live waitlist size from the Brevo list. Server-side only, so the API key
// never reaches the client. Cached/revalidated hourly (see fetch options and
// the page-level `revalidate`). Falls back to the last known baseline if the
// Brevo API is unavailable, so an outage never shows "0" or breaks the build.
export async function getWaitlistCount(): Promise<number> {
  const key = process.env.BREVO_API_KEY;
  if (!key) return WAITLIST_COUNT;

  try {
    const res = await fetch(`https://api.brevo.com/v3/contacts/lists/${LIST_ID}`, {
      headers: { accept: 'application/json', 'api-key': key },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return WAITLIST_COUNT;

    const data = await res.json();
    const n = Number(data?.uniqueSubscribers ?? data?.totalSubscribers);
    return Number.isFinite(n) && n > 0 ? n : WAITLIST_COUNT;
  } catch {
    return WAITLIST_COUNT;
  }
}
