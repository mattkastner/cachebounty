/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

module.exports = nextConfig
