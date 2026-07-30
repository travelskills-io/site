'use client';

import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import type { Locale, LocaleContent } from '@/lib/content';

type Status = 'idle' | 'submitting' | 'success' | 'already' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Renders the social-proof line with a functional status icon and the leading
// count emphasized. Icon inherits currentColor (Heroicons solid, DS-compliant).
function renderSocialProof(line: string) {
  const [count, ...rest] = line.split(' ');
  return (
    <span className="inline-flex items-center gap-sm">
      <PaperAirplaneIcon aria-hidden="true" className="h-[16px] w-[16px] shrink-0" />
      <span>
        <span className="font-semibold">{count}</span> {rest.join(' ')}
      </span>
    </span>
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
        if (data.alreadySubscribed) {
          setStatus('already');
          setMessage(hero.alreadyIn);
        } else {
          setStatus('success');
          setMessage(hero.success);
        }
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

  return (
    <div className="mt-2xl w-full max-w-[440px]">
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-md sm:flex-row">
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
          disabled={done}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          className="w-full flex-1 rounded-lg border-0 bg-surface-container px-lg py-md text-body-md text-on-surface placeholder:text-on-surface-muted disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={!consent || status === 'submitting' || done}
          className="shrink-0 rounded-full bg-primary px-[20px] py-md text-label-sm font-medium text-on-primary transition-opacity duration-[150ms] ease-out hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {status === 'submitting' ? hero.submitting : done ? '✓' : hero.cta}
        </button>
      </form>

      {/* Explicit GDPR consent, required at collection (see privacy policy). */}
      <label className="mt-md flex cursor-pointer items-start gap-sm text-label-sm text-on-surface-muted">
        <input
          type="checkbox"
          checked={consent}
          disabled={done}
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

      {/* Social proof by default; swaps to form feedback after submit. */}
      <p className="mt-lg text-body-md text-on-surface" aria-live="polite" role="status">
        {message ? message : renderSocialProof(hero.socialProof)}
      </p>
    </div>
  );
}
