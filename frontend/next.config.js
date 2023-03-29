/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com']
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  }
}
module.exports = nextConfig