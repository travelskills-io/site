import type { Locale } from '@/lib/content';
import { content, HERO_CODE, GITHUB_URL } from '@/lib/content';
import { getWaitlistCount } from '@/lib/waitlist';
import WaitlistForm from './WaitlistForm';
import StructuredData from './StructuredData';
import JoinWaitlistLink from './JoinWaitlistLink';

function GitHubMark() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-[16px] w-[16px] fill-current">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export default async function Landing({ locale }: { locale: Locale }) {
  const c = content[locale];
  const count = await getWaitlistCount();
  const otherHref = locale === 'en' ? '/fr/' : '/';

  return (
    <div className="min-h-screen bg-surface">
      <StructuredData locale={locale} />
      {/* Header: wordmark + language switch. Not gold (gold never decorates). */}
      <header className="container-page flex items-center justify-between py-xl">
        <span className="text-title-lg font-semibold tracking-[-0.005em] text-on-surface-display">
          Travel<span className="text-on-surface">Skills</span>.io
        </span>
        {/* Language switch. Tap targets >= 24x24 (WCAG 2.5.8) via padding, and
            the affordance points at the target language: current is muted, the
            clickable other language is the contrasted one. */}
        <nav
          aria-label={locale === 'en' ? 'Language' : 'Langue'}
          className="-mr-md flex items-center text-label-sm"
        >
          <span aria-current="true" className="px-md py-sm text-on-surface-muted">
            {locale === 'en' ? 'EN' : 'FR'}
          </span>
          <span aria-hidden="true" className="text-on-surface-muted">
            /
          </span>
          <a
            href={otherHref}
            hrefLang={locale === 'en' ? 'fr' : 'en'}
            lang={locale === 'en' ? 'fr' : 'en'}
            className="px-md py-sm text-on-surface transition-colors duration-[150ms] ease-out hover:text-secondary"
          >
            {locale === 'en' ? 'FR' : 'EN'}
          </a>
        </nav>
      </header>

      <main className="container-page pb-6xl">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="grid grid-cols-1 gap-4xl pt-4xl lg:grid-cols-12 lg:gap-xl lg:pt-6xl">
          <div className="lg:col-span-7">
            <h1 className="type-display max-w-[12ch]">{c.hero.h1}</h1>
            <p className="mt-xl max-w-[60ch] text-body-lg text-on-surface">{c.hero.subtitle}</p>

            <WaitlistForm locale={locale} hero={c.hero} count={count} />

            <p className="mt-2xl text-label-sm text-on-surface-muted">
              {renderStatusLine(c.hero.statusLine)}
            </p>
          </div>

          {/* Decorative code block. Real text, tight radius, never pill. */}
          <div className="lg:col-span-5">
            <pre className="overflow-x-auto rounded-sm bg-surface-container p-xl font-mono text-mono-md leading-[1.25rem] text-on-surface">
              <code>{HERO_CODE}</code>
            </pre>
          </div>
        </section>

        {/* ── Section 1: four roles ────────────────────────────────────── */}
        <section className="mt-6xl">
          <h2 className="text-headline-lg text-on-surface-display">{c.roles.heading}</h2>
          <div className="mt-3xl grid grid-cols-1 gap-xl sm:grid-cols-2">
            {c.roles.items.map((role) => (
              <article
                key={role.id}
                className="group rounded-2xl bg-surface-container p-xl transition-colors duration-[150ms] ease-out hover:bg-surface-container-high"
              >
                <p className="font-mono text-mono-md text-secondary">{role.num} ·</p>
                <h3 className="mt-md text-title-lg text-on-surface-display">{role.name}</h3>
                <p className="mt-xs font-mono text-mono-md text-on-surface-muted">{role.id}</p>
                <p className="mt-md text-body-md text-on-surface">{role.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Section 2: FAQ ───────────────────────────────────────────── */}
        <section className="mt-6xl">
          <h2 className="text-headline-lg text-on-surface-display">{c.faq.heading}</h2>
          <div className="mt-3xl flex flex-col gap-3xl">
            {c.faq.items.map((item) => (
              <div key={item.q}>
                <h3 className="text-headline-md text-on-surface-display">{item.q}</h3>
                <p className="mt-lg max-w-[70ch] text-body-lg text-on-surface">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conversion reminder: text link back to the hero form (no 2nd form). */}
        <p className="mt-6xl text-body-lg text-on-surface">
          {c.anchorCta.prompt}{' '}
          <JoinWaitlistLink
            label={c.anchorCta.link}
            className="text-on-surface-display underline underline-offset-2 transition-colors duration-[150ms] ease-out hover:text-secondary"
          />
        </p>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="container-page border-t border-outline py-4xl">
        <p className="max-w-[40ch] text-headline-md italic text-on-surface-display">
          {c.footer.baseline}
        </p>
        <p className="mt-xl max-w-[70ch] text-body-md text-on-surface">{c.footer.paragraph}</p>

        <div className="mt-2xl">
          <a
            href={c.footer.nameUrl}
            target="_blank"
            rel="noopener"
            className="text-body-md text-on-surface transition-colors duration-[150ms] ease-out hover:text-secondary"
          >
            {c.footer.name}
          </a>
          <p className="text-label-sm text-on-surface-muted">{c.footer.role}</p>
        </div>

        <nav
          aria-label={locale === 'en' ? 'Site links' : 'Liens'}
          className="mt-2xl flex flex-wrap items-center gap-x-lg gap-y-md text-label-sm"
        >
          {c.footer.links.map((link) => {
            const isGitHub = link.href === GITHUB_URL;
            return (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
                className="inline-flex items-center gap-sm text-on-surface-muted transition-colors duration-[150ms] ease-out hover:text-secondary"
              >
                {isGitHub && <GitHubMark />}
                {link.label}
              </a>
            );
          })}
        </nav>
      </footer>
    </div>
  );
}

// Renders the status line, turning the whole "... GitHub" segment after the
// middle-dot separator into a link to the GitHub org.
function renderStatusLine(line: string) {
  const sep = ' · ';
  const idx = line.indexOf(sep);
  if (idx === -1) return line;
  const before = line.slice(0, idx);
  const linkText = line.slice(idx + sep.length);
  return (
    <>
      {before}
      {sep}
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener"
        className="underline underline-offset-2 transition-colors duration-[150ms] ease-out hover:text-secondary"
      >
        {linkText}
      </a>
    </>
  );
}
