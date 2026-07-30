import { NextResponse } from 'next/server';

// Port of the legacy subscribe.php Brevo handler. Same behavior: add the
// contact to the list, and on a genuinely new contact, notify the team via a
// transactional template. Welcome emails stay handled by a Brevo marketing
// automation triggered on list subscription; not sent from here.

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const API_KEY = process.env.BREVO_API_KEY;
const LIST_ID = Number(process.env.BREVO_LIST_ID ?? 5);
const TEMPLATE_ID = Number(process.env.BREVO_NOTIFICATION_TEMPLATE_ID ?? 5);
const NOTIFY_EMAIL = process.env.BREVO_NOTIFY_EMAIL ?? 'nicolas@nfrancois.fr';
const NOTIFY_NAME = process.env.BREVO_NOTIFY_NAME ?? 'Nicolas François';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function brevo(endpoint: string, data: unknown) {
  const res = await fetch(`https://api.brevo.com/v3${endpoint}`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': API_KEY as string,
    },
    body: JSON.stringify(data),
  });
  let body: any = null;
  try {
    body = await res.json();
  } catch {
    body = null;
  }
  return { code: res.status, body };
}

export async function POST(request: Request) {
  if (!API_KEY) {
    console.error('BREVO_API_KEY is not set');
    return NextResponse.json({ success: false, message: 'Server misconfigured' }, { status: 500 });
  }

  let payload: any;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid body' }, { status: 400 });
  }

  const email = String(payload?.email ?? '').trim().toLowerCase();
  const lang = payload?.lang === 'fr' ? 'fr' : 'en';

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { success: false, message: 'Invalid email address' },
      { status: 400 },
    );
  }

  // 1. Add the contact to the Brevo list.
  let result;
  try {
    result = await brevo('/contacts', {
      email,
      listIds: [LIST_ID],
      updateEnabled: false,
      attributes: { SOURCE: 'travelskills.io', LANG: lang.toUpperCase() },
    });
  } catch (err) {
    console.error('Brevo connection error', err);
    return NextResponse.json({ success: false, message: 'Connection error' }, { status: 500 });
  }

  const alreadySubscribed =
    result.code === 400 && result.body?.code === 'duplicate_parameter';
  const isNewContact = result.code === 201;

  if (![201, 204].includes(result.code) && !alreadySubscribed) {
    return NextResponse.json(
      { success: false, message: 'Subscription failed' },
      { status: 500 },
    );
  }

  // 2. Notify the team only on a genuinely new contact.
  if (isNewContact) {
    try {
      await brevo('/smtp/email', {
        templateId: TEMPLATE_ID,
        to: [{ email: NOTIFY_EMAIL, name: NOTIFY_NAME }],
        params: {
          EMAIL: email,
          LANG: lang.toUpperCase(),
          DATE: new Date().toISOString().slice(0, 16).replace('T', ' '),
          SOURCE: 'travelskills.io',
        },
      });
    } catch (err) {
      // Notification failure must not fail the subscription itself.
      console.error('Brevo notification error', err);
    }
  }

  return NextResponse.json({ success: true, alreadySubscribed });
}
