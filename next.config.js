/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Keep trailing slashes: matches the legacy Hostinger URLs Google already
  // indexed (/fr/, /privacy/, ...) and keeps canonical/hreflang/sitemap and
  // internal links all consistent.
  trailingSlash: true,
  async redirects() {
    return [
      // Preserve the legacy PHP endpoint path in case anything still points at it.
      { source: '/subscribe.php', destination: '/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
