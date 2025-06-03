import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
      {
        protocol: 'https',
        hostname: 'author-shaelin-bishop.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'shaelinbishop.vercel.app',
      },
    ],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
