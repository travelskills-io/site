'use client';

// Text link that jumps back to the hero waitlist form, then moves keyboard
// focus into the email field (an anchor alone would move the view but leave
// focus at the bottom of the page). Respects reduced-motion and tracks clicks.
export default function JoinWaitlistLink({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const target = document.getElementById('waitlist');
    const input = document.getElementById('waitlist-email') as HTMLInputElement | null;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    target?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    window.setTimeout(() => input?.focus({ preventScroll: true }), reduce ? 0 : 450);

    const plausible = (window as unknown as { plausible?: (event: string) => void }).plausible;
    if (typeof plausible === 'function') plausible('Waitlist anchor CTA');
  }

  return (
    <a href="#waitlist" onClick={onClick} className={className}>
      {label}
    </a>
  );
}
