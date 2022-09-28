/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    WHATSAPP: process.env.WHATSAPP,
  },
};

module.exports = nextConfig;
