/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@intent-flow-package/ui', '@intent-flow-package/utils'],
};

module.exports = nextConfig;
