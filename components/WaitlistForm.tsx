'use client';

import { useRef, useState } from 'react';
import type { Locale, LocaleContent } from '@/lib/content';

type Status = 'idle' | 'submitting' | 'done';

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

export default function WaitlistForm({
  locale,
  hero,
  count,
}: {
  locale: Locale;
  hero: LocaleContent['hero'];
  count: number;
}) {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [emailError, setEmailError] = useState('');
  const [consentError, setConsentError] = useState('');
  const [apiError, setApiError] = useState('');

  const emailRef = useRef<HTMLInputElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);

  const submitting = status === 'submitting';

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setApiError('');

    // Validate on click, stop at the first error, focus the faulty control.
    const value = email.trim();
    if (!value) {
      setEmailError(hero.emailEmpty);
      emailRef.current?.focus();
      return;
    }
    if (!EMAIL_RE.test(value)) {
      setEmailError(hero.emailInvalid);
      emailRef.current?.focus();
      return;
    }
    setEmailError('');

    if (!consent) {
      setConsentError(hero.consentRequired);
      consentRef.current?.focus();
      return;
    }
    setConsentError('');

    setStatus('submitting');
    try {
      const res = await fetch('/api/subscribe/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value, lang: locale }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus('done');
      } else {
        setStatus('idle');
        setApiError(hero.apiError);
      }
    } catch {
      setStatus('idle');
      setApiError(hero.apiError);
    }
  }

  const containerClass = 'mt-2xl w-full max-w-[440px] scroll-mt-3xl';

  // Success / already subscribed: replace the form with a confirmation.
  if (status === 'done') {
    return (
      <div id="waitlist" className={containerClass}>
        <div
          role="status"
          aria-live="polite"
          className="flex items-center gap-md rounded-lg bg-surface-container px-lg py-md"
        >
          <CheckCircleIcon />
          <p className="text-body-md text-on-surface-display">{hero.success}</p>
        </div>
      </div>
    );
  }

  return (
    <div id="waitlist" className={containerClass}>
      {/* 1. Social proof (live count) */}
      <p className="text-body-md text-on-surface">
        <span className="font-semibold">{count.toLocaleString(locale)}</span> {hero.socialProofSuffix}
      </p>

      <form onSubmit={onSubmit} noValidate className="mt-lg flex flex-col gap-lg">
        {/* 2. Email */}
        <div>
          <label htmlFor="waitlist-email" className="sr-only">
            {hero.emailLabel}
          </label>
          <input
            ref={emailRef}
            id="waitlist-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder={hero.emailPlaceholder}
            value={email}
            aria-invalid={emailError ? true : undefined}
            aria-describedby={emailError ? 'waitlist-email-error' : undefined}
            onChange={(e) => {
              const v = e.target.value;
              setEmail(v);
              if (emailError && EMAIL_RE.test(v.trim())) setEmailError('');
            }}
            className={`w-full rounded-lg border-0 bg-surface-container px-lg py-md text-body-md text-on-surface placeholder:text-on-surface-muted ${
              emailError ? 'outline outline-2 outline-error' : ''
            }`}
          />
          {emailError && (
            <p id="waitlist-email-error" role="alert" className="mt-sm text-label-sm text-error">
              {emailError}
            </p>
          )}
        </div>

        {/* 3. Consent + privacy policy */}
        <div>
          {/* Wrapping label: the whole line is the tap target, so the effective
              target is far above the 24x24 minimum (WCAG 2.5.8). */}
          <label className="flex cursor-pointer items-start gap-md py-xs text-label-sm text-on-surface-muted">
            <input
              ref={consentRef}
              type="checkbox"
              checked={consent}
              aria-invalid={consentError ? true : undefined}
              aria-describedby={consentError ? 'waitlist-consent-error' : undefined}
              onChange={(e) => {
                setConsent(e.target.checked);
                if (e.target.checked) setConsentError('');
              }}
              className="consent-checkbox mt-[-1px]"
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
          {consentError && (
            <p id="waitlist-consent-error" role="alert" className="mt-sm text-label-sm text-error">
              {consentError}
            </p>
          )}
        </div>

        {/* 4. Submit (only ever disabled while sending) */}
        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting || undefined}
          className="btn-primary w-full sm:w-auto sm:self-start"
        >
          {submitting ? hero.submitting : hero.cta}
        </button>

        {apiError && (
          <p role="alert" className="text-label-sm text-error">
            {apiError}
          </p>
        )}
      </form>
    </div>
  );
}
