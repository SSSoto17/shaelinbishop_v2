import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

// import { RefreshRouteOnSave } from './RefreshRouteOnSave'
// import { getPages, getPage } from '@/lib/PageQueries'

// import RenderHero from '@/components/Hero/RenderHero'
// import RenderContent from '@/components/RenderContent'

// export async function generateStaticParams() {
//   const selector = { slug: true }
//   const filter = {
//     slug: {
//       not_equals: '/home',
//     },
//   }
//   const pages = await getPages(selector, filter)

//   return pages.map((page) => ({
//     slug: [page.slug],
//   }))
// }

// async function getPageBySlug(slug, draft) {
//   const filter = { slug: { equals: '/' + slug } }
//   const page = await getPage(null, filter, draft)

//   if (!page) {
//     notFound()
//   }

//   return page
// }

export default async function Page({ params }) {
  //   const { slug = 'home' } = await params
  const { isEnabled } = await draftMode()

  //   const { hero, sections } = await getPageBySlug(slug, isEnabled)

  // console.log(sections)

  return (
    <main className="full-bleed">
      <h1>Testing</h1>
      {/* <RefreshRouteOnSave />
      <RenderHero {...hero} />
      <RenderContent content={sections} /> */}
    </main>
  )
}
