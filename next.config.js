/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ["tfhrbqjlfxpvafjyjoyx.supabase.co"],
  },
};

module.exports = nextConfig;
