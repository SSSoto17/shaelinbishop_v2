import { getPage, getPages } from '@/lib/pages'

// GENERATING PARAMS
export async function generateStaticParams() {
  const selector = { slug: true }
  const filter = {
    slug: {
      not_equals: '/home',
    },
  }
  const pages = await getPages(selector, filter)

  return pages.map((page) => ({
    slug: [page.slug],
  }))
}

// FUNCTIONS
async function getPageBySlug(slug, draft) {
  const filter = { slug: { equals: '/' + slug } }
  const page = await getPage(null, filter, draft)

  if (!page) {
    notFound()
  }

  return page
}

// RENDERED PAGE
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Content, Hero } from '@/components'
import LivePreview from '@/hooks/LivePreview'

export default async function Page({ params }) {
  const { slug = 'home' } = await params
  const { isEnabled } = await draftMode()

  const { hero, sections } = await getPageBySlug(slug, isEnabled)

  return (
    <main className="full-bleed">
      {isEnabled && <LivePreview />}
      <Hero {...hero} />
      <Content content={sections} />
      {slug[0] === 'about' && <AboutHardcoded />}
    </main>
  )
}

function AboutHardcoded() {
  return (
    <>
      <section className="py-2xl">
        <h2>Check out Shaelin's YouTube</h2>
      </section>
    </>
  )
}
