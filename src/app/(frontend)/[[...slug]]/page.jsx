import { PublicationContent } from '@/collections/Publications'
import { Content } from '@/components'
import LivePreview from '@/hooks/LivePreview'
import { getPage, getPages } from '@/lib/pages'
import { getPublication, getPublications } from '@/lib/publications'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

// GENERATING PARAMS
export async function generateStaticParams() {
  const pages = await getPages(
    { slug: true },
    {
      slug: {
        not_equals: '/home',
      },
    },
  )

  const publications = await getPublications(
    { slug: true, releaseDetails: true },
    {
      slug: {
        exists: true,
      },
    },
  )

  const pubPaths = publications.map(
    ({
      slug,
      id,
      releaseDetails: {
        category: { title },
      },
    }) => ({
      slug: `/${title.toLowerCase() + slug}`,
      id,
    }),
  )

  const allPages = [...pages, ...pubPaths]

  return allPages.map(({ slug }) => ({
    slug: [slug],
  }))
}

// PAGE
export default async function Page({ params }) {
  const { slug = 'home' } = await params
  const { isEnabled } = await draftMode()

  // FIND PAGE
  const page = await getPage(null, { slug: { equals: `/${slug}` } }, isEnabled)

  // FIND PUBLICATION
  const categoryName = slug[0].at(0).toUpperCase() + slug[0].slice(1)

  const publication = await getPublication(
    null,
    { 'releaseDetails.category.title': { equals: categoryName }, slug: { equals: `/${slug[1]}` } },
    isEnabled,
  )

  if (!page && !publication) {
    notFound()
  }

  if (publication) {
    return (
      <main id="main" className="full-bleed">
        {isEnabled && <LivePreview />}
        <PublicationContent {...publication} />
      </main>
    )
  }

  return (
    <main id="main" className="full-bleed scroll-mt-20">
      {isEnabled && <LivePreview />}
      <Content {...page} />
    </main>
  )
}
