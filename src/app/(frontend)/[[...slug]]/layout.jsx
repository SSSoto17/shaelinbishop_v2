import { Footer, Header } from '@/globals/Navigation'
import { getPage } from '@/lib/pages'
import { draftMode } from 'next/headers'

export default async function PageLayout({ children, params }) {
  const { slug = 'home' } = await params
  const { isEnabled } = await draftMode()

  const page = await getPage(null, { slug: { equals: `/${slug}` } }, isEnabled)

  return (
    <>
      <Header {...page} />
      {children}
      <Footer />
    </>
  )
}
