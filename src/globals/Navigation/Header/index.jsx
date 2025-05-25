import { payload } from '@/lib/utils'
import Link from 'next/link'

import { Hero } from '@/components'
import AdminBar from '../../../globals/Navigation/AdminBar'

import { Suspense } from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa6'

export default function Header({ id, hero }) {
  return (
    <header
      className={`full-bleed grid ${hero?.type === 'highImpact' && 'h-screen'} grid-cols-subgrid grid-rows-[auto_1fr]`}
    >
      {/* <section className="full-bleed bg-primary-50 drop-shadow-md"> */}
      <section className="sticky top-0 z-20 full-bleed bg-primary-50 drop-shadow-md">
        <AdminBar id={id} />
        <NavBar />
      </section>
      <Suspense>{hero && <Hero {...hero} />}</Suspense>
    </header>
  )
}

function Logo() {
  return (
    <Link
      href="/navigate?path=/"
      className="justify-self-start font-logo tracking-wider uppercase hover:opacity-60"
      scroll
    >
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
    <nav className="grid grid-cols-[1fr_auto_auto] items-center justify-items-end gap-x-xl justify-self-stretch py-2xs">
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
      <ul className="flex items-center gap-3xs">
        <li>
          <Link
            href="https://www.youtube.com/channel/UCb-wzF6DrSslXq3qE61YL7A"
            target="_blank"
            aria-label="Go to Shaelin's YouTube channel"
            className="transition duration-150 ease-in hover:text-primary-700"
          >
            <FaYoutube className="h-6" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/shaelinbishop"
            target="_blank"
            aria-label="Go to Shaelin's Instagram account"
            className="transition duration-150 ease-in hover:text-primary-700"
          >
            <FaInstagram className="h-6 py-0.5" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
