import type { ReactNode } from 'react';

// Shared chrome for legal / privacy content pages.
export default function LegalLayout({
  eyebrow,
  title,
  homeHref,
  backLabel,
  children,
  updated,
}: {
  eyebrow: string;
  title: string;
  homeHref: string;
  backLabel: string;
  children: ReactNode;
  updated?: string;
}) {
  return (
    <div className="min-h-screen bg-surface">
      <div className="mx-auto w-full max-w-[720px] px-lg py-2xl sm:px-2xl">
        <header className="mb-4xl flex items-center justify-between">
          <a
            href={homeHref}
            className="text-title-lg font-semibold tracking-[-0.005em] text-on-surface-display"
          >
            Travel<span className="text-on-surface">Skills</span>.io
          </a>
          <a
            href={homeHref}
            className="text-label-sm text-on-surface-muted transition-colors duration-[150ms] ease-out hover:text-secondary"
          >
            {backLabel}
          </a>
        </header>

        <p className="font-mono text-mono-md uppercase tracking-[0.02em] text-secondary">
          {eyebrow}
        </p>
        <h1 className="mt-md text-headline-lg text-on-surface-display">{title}</h1>

        <div className="mt-3xl legal-prose">{children}</div>

        {updated && <p className="mt-4xl font-mono text-mono-md text-on-surface-muted">{updated}</p>}
      </div>
    </div>
  );
}
