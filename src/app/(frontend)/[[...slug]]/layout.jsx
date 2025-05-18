import { getPage } from '@/lib/pages'

// COMPONENTS
import { Nav, Footer } from 'src/components/Navigation/Header/RenderHeader'
import AdminBar from '@/components/Navigation/AdminBar/RenderAdminBar'

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
      <Nav>
        <AdminBar {...pageID} />
      </Nav>
      {children}
      <Footer />
    </>
  )
}
