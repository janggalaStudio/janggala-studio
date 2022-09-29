/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    WHATSAPP: process.env.WHATSAPP,
    FAMILY: process.env.FAMILY,
    WEDDING: process.env.WEDDING,
    PREWEDDING: process.env.PREWEDDING,
    ENGAGEMENT: process.env.ENGAGEMENT,
    NEW_BORN: process.env.NEW_BORN,
    GRADUATION: process.env.GRADUATION,
    GROUP: process.env.GROUP,
  },
};

module.exports = nextConfig;
