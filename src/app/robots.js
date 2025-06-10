export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/',
    },
    sitemap: process.env.NEXT_PUBLIC_PAYLOAD_URL + '/sitemap.xml',
  }
}
