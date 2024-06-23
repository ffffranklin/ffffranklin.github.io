/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/keybase.txt',
        destination: '/.well-known/keybase.txt',
      }
    ]
  }
};

module.exports = nextConfig;
