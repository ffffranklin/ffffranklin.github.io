const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
};

module.exports = withMDX(nextConfig);
