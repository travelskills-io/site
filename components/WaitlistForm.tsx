'use client';

import { useState } from 'react';
import type { Locale, LocaleContent } from '@/lib/content';

type Status = 'idle' | 'submitting' | 'success' | 'already' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Success status icon (Heroicons check-circle solid). Green is the design
// system's sanctioned color for a completed state; inherits via currentColor.
function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[24px] w-[24px] shrink-0 fill-current text-success">
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// Renders the social-proof line with the leading count emphasized.
function renderSocialProof(line: string) {
  const [count, ...rest] = line.split(' ');
  return (
    <>
      <span className="font-semibold">{count}</span> {rest.join(' ')}
    </>
  );
}

export default function WaitlistForm({
  locale,
  hero,
}: {
  locale: Locale;
  hero: LocaleContent['hero'];
}) {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<string>('');

  const done = status === 'success' || status === 'already';

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'submitting' || done) return;

    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setStatus('error');
      setMessage(hero.invalidEmail);
      return;
    }

    setStatus('submitting');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value, lang: locale }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus(data.alreadySubscribed ? 'already' : 'success');
        setMessage(data.alreadySubscribed ? hero.alreadyIn : hero.success);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(hero.error);
      }
    } catch {
      setStatus('error');
      setMessage(hero.error);
    }
  }

  // Success / already-subscribed: replace the form with a clear confirmation.
  if (done) {
    return (
      <div className="mt-2xl w-full max-w-[440px]">
        <div
          role="status"
          aria-live="polite"
          className="flex items-center gap-md rounded-lg bg-surface-container px-lg py-md"
        >
          <CheckCircleIcon />
          <p className="text-body-md text-on-surface-display">{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-2xl w-full max-w-[440px]">
      {/* flex-wrap + order: mobile stacks input -> consent -> button; desktop
          puts input + button on one row with consent below. DOM order stays
          input -> consent -> button so tab order is logical. */}
      <form onSubmit={onSubmit} noValidate className="flex flex-wrap items-center gap-md">
        <label htmlFor="waitlist-email" className="sr-only">
          {hero.emailLabel}
        </label>
        <input
          id="waitlist-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={hero.emailPlaceholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          className="order-1 w-full rounded-lg border-0 bg-surface-container px-lg py-md text-body-md text-on-surface placeholder:text-on-surface-muted sm:w-auto sm:flex-1"
        />

        {/* Explicit GDPR consent, required at collection (see privacy policy). */}
        <label className="order-2 flex w-full cursor-pointer items-start gap-sm text-label-sm text-on-surface-muted sm:order-3">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-[2px] h-[14px] w-[14px] shrink-0 accent-[color:var(--color-secondary)]"
          />
          <span>
            {hero.consent}{' '}
            <a
              href={hero.privacyHref}
              className="underline underline-offset-2 transition-colors duration-[150ms] ease-out hover:text-secondary"
            >
              {hero.privacyLinkLabel}
            </a>
          </span>
        </label>

        <button
          type="submit"
          disabled={!consent || status === 'submitting'}
          className="order-3 w-full shrink-0 rounded-full bg-primary px-[20px] py-md text-label-sm font-medium text-on-primary transition-opacity duration-[150ms] ease-out hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 sm:order-2 sm:w-auto"
        >
          {status === 'submitting' ? hero.submitting : hero.cta}
        </button>
      </form>

      {/* Social proof by default; red error message on failure. */}
      <p className="mt-lg text-body-md text-on-surface" aria-live="polite" role="status">
        {status === 'error' ? (
          <span className="text-error">{message}</span>
        ) : (
          renderSocialProof(hero.socialProof)
        )}
      </p>
    </div>
  );
}
