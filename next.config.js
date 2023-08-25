/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/earth',
        permanent: false,
      }
    ]
  },
  typescript:
  {ignoreBuildErrors: true}
}

module.exports = nextConfig
