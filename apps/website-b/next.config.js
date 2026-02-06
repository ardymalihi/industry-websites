/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@my-org/ui', '@my-org/utils'],
};

module.exports = nextConfig;
