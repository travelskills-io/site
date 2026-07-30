/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // Preserve the legacy PHP endpoint path in case anything still points at it.
      { source: '/subscribe.php', destination: '/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
