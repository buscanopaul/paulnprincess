/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_SUPABASE_HOSTNAME],
  },
};

module.exports = nextConfig;
