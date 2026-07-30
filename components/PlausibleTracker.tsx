'use client';

import { useEffect } from 'react';

// Official Plausible tracker (replaces the legacy pa-*.js script tag).
// Same Plausible Cloud account, site "travelskills.io". Gated to the production
// host so preview deploys and localhost don't pollute the stats.
// The package touches `location` at module load, so it is imported dynamically
// inside the effect to keep it out of the server render.
export default function PlausibleTracker() {
  useEffect(() => {
    const host = window.location.hostname;
    if (host !== 'travelskills.io' && host !== 'www.travelskills.io') return;

    void import('@plausible-analytics/tracker').then(({ init }) => {
      init({
        domain: 'travelskills.io',
        autoCapturePageviews: true,
      });
    });
  }, []);

  return null;
}
