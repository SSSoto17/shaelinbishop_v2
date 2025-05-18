import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

// import { RefreshRouteOnSave } from './RefreshRouteOnSave'
import { getPage, getPages } from '@/lib/pageQueries'

// import RenderHero from '@/components/Hero/RenderHero'
// import RenderContent from '@/components/RenderContent'

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

async function getPageBySlug(slug, draft) {
  const filter = { slug: { equals: '/' + slug } }
  const page = await getPage(null, filter, draft)

  if (!page) {
    notFound()
  }

  return page
}

export default async function Page({ params }) {
  const { slug = 'home' } = await params
  const { isEnabled } = await draftMode()

  const { title } = await getPageBySlug(slug, isEnabled)
  // const { hero, sections } = await getPageBySlug(slug, isEnabled)

  console.log(slug)

  return (
    <main className="full-bleed">
      <h1>{title}</h1>
      {/* <RefreshRouteOnSave />
      <RenderHero {...hero} />
      <RenderContent content={sections} /> */}
    </main>
  )
}
