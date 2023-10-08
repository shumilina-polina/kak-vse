/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // reactStrictMode: true,

  images: {
    unoptimized: true,
    domains: [
      "localhost",
      "https://admin.kak-vse.info",
    ],
  },
}

module.exports = nextConfig
