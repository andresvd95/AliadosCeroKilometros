/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // ← Debe estar esto
  
  images: {
    unoptimized: true,
  },
  
  trailingSlash: true,
};

module.exports = nextConfig;