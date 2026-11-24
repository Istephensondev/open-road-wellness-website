/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/chair-yoga", destination: "/", permanent: true },
      { source: "/gentle-movement", destination: "/", permanent: true },
      { source: "/senior-living-wellness", destination: "/", permanent: true },
    ]
  },
}

export default nextConfig
