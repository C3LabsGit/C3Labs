/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ["v0.blob.com", "hebbkx1anhila5yf.public.blob.vercel-storage.com", "blob.v0.dev"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v0.blob.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blob.v0.dev",
        pathname: "/**",
      },
    ],
  },
}

module.exports = nextConfig
