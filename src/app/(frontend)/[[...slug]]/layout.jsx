import { getPage } from '@/lib/pages'

// COMPONENTS
import { AdminBar, Header, Footer } from '@/components/Navigation'

async function getPageID(slug) {
  const selector = { id: true }
  const filter = { slug: { equals: `/${slug}` } }
  const page = await getPage(selector, filter)

  return page
}

export default async function PageLayout({ children, params }) {
  const { slug = 'home' } = await params
  const pageID = await getPageID(slug)

  return (
    <>
      <Header>
        <AdminBar {...pageID} />
      </Header>
      {children}
      <Footer />
    </>
  )
}
