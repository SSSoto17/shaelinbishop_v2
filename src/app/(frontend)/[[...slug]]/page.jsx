import { draftMode, headers as getHeaders } from 'next/headers'
import { notFound } from 'next/navigation'

import { RefreshRouteOnSave } from '@/hooks/RefreshRouteonSave'
import { getPage, getPages } from '@/app/local/pages/route'
import { payload } from '@/lib/utils'

import RenderHero from '@/components/Hero'
import RenderContent from '@/components/RenderContent'

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
  const draft = await draftMode()
  const headers = await getHeaders()

  const { user } = await payload.auth({ headers })

  if (!user) {
    draft.disable()
  }

  const { hero, sections } = await getPageBySlug(slug, draft.isEnabled)

  return (
    <main className="full-bleed">
      <RefreshRouteOnSave />
      <RenderHero {...hero} />
      <RenderContent content={sections} />
    </main>
  )
}
