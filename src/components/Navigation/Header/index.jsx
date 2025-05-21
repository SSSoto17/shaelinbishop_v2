import { payload } from '@/lib/utils'
import Link from 'next/link'

import { Hero } from '@/components'
import AdminBar from '../AdminBar'

export default function Header({ id, hero }) {
  return (
    <header
      className={`full-bleed grid ${hero?.type === 'highImpact' && 'h-screen'} snap-start grid-cols-subgrid grid-rows-[auto_1fr]`}
    >
      {/* <section className="full-bleed bg-primary-50 drop-shadow-md"> */}
      <section className="sticky top-0 z-10 full-bleed bg-primary-50 drop-shadow-md">
        <AdminBar id={id} />
        <NavBar />
      </section>
      {hero && <Hero {...hero} />}
    </header>
  )
}

function Logo() {
  return (
    <Link href="/navigate?path=/" className="font-logo tracking-wider uppercase hover:opacity-60">
      Shaelin Bishop
    </Link>
  )
}

async function NavBar() {
  const { items } = await payload.findGlobal({
    slug: 'header',
    pagination: false,
  })

  return (
    <nav className="grid grid-cols-[auto_1fr] items-center justify-items-end gap-2xl justify-self-stretch py-2xs">
      <Logo />
      <ul className="flex flex-wrap gap-x-md font-logo text-sm tracking-tight">
        {items.map((item, id) => {
          return (
            <li key={id}>
              <Link href={'/navigate?path=' + item.page.slug}>{item.page.title}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
