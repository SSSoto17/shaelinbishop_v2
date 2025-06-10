import { getPages } from '@/lib/pages'
import { getPublications } from '@/lib/publications'

export const revalidate = 30

export default async function sitemap() {
  const pages = await getPages(
    { slug: true, updatedAt: true },
    { _status: { equals: 'published' } },
    false,
  )

  const publications = await getPublications(
    { slug: true, updatedAt: true, releaseDetails: true },
    {
      and: [
        { _status: { equals: 'published' } },
        {
          or: [
            {
              'releaseDetails.category.title': {
                equals: 'Books',
              },
            },
            {
              'releaseDetails.category.title': {
                equals: 'Collections',
              },
            },
          ],
        },
      ],
    },
  )

  const pageSlugs = pages.map(({ slug, updatedAt }) => ({
    url: slug === '/home' ? '' : slug,
    lastModified: updatedAt,
    priority: slug === '/home' ? 1 : 0.8,
    changeFrequency: 'yearly',
  }))

  const pubSlugs = publications.map(
    ({
      slug,
      updatedAt,
      releaseDetails: {
        category: { title },
      },
    }) => ({
      url: `/${title.toLowerCase() + slug}`,
      lastModified: updatedAt,
      priority: 0.5,
      changeFrequency: 'yearly',
    }),
  )

  const sitemaps = [
    ...pageSlugs,
    ...pubSlugs,
  ].map((route) => ({
    ...route,
    url: process.env.NEXT_PUBLIC_PAYLOAD_URL + route.url,
  }))

  return sitemaps
}
