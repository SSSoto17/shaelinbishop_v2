import { payload } from '@/lib/utils'
import { CloseButton, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Link from 'next/link'

import { Hero } from '@/blocks'
import { FaInstagram, FaYoutube } from 'react-icons/fa6'
import { ImSpinner2 } from 'react-icons/im'
import { MdOutlineMenu, MdOutlineMenuOpen } from 'react-icons/md'
import AdminBar from '../AdminBar'

export default function Header({ id, hero }) {
  return (
    <header
      className={`full-bleed ${hero?.type === 'highImpact' && 'h-screen'} grid-cols-subgrid grid-rows-[auto_1fr]`}
    >
      {/* <section className="full-bleed bg-primary-50 drop-shadow-md"> */}
      <section className="full-bleed sticky top-0 z-20 bg-primary-50 drop-shadow-md">
        <AdminBar id={id} />
        <NavBar />
      </section>
      {hero && <Hero {...hero} />}
    </header>
  )
}

function Logo() {
  return (
    <Link
      href="/"
      className="justify-self-start font-logo text-base/6 tracking-wider uppercase hover:opacity-60"
    >
      Shaelin Bishop
    </Link>
  )
}

function Loading() {
  return (
    <section className="grid place-content-center py-xl">
      <h2 className="inline-flex animate-pulse items-center gap-md text-center font-display text-3xl font-bold duration-150">
        <ImSpinner2 className="animate-spin" />
      </h2>
    </section>
  )
}

async function NavBar() {
  const { items } = await payload.findGlobal({
    slug: 'header',
    pagination: false,
  })

  return (
    <nav className="flex items-center justify-between justify-items-end gap-x-xl justify-self-stretch py-2xs md:grid md:grid-cols-[1fr_auto_auto]">
      <Logo />
      <ul className="hidden flex-wrap gap-x-md font-logo text-sm tracking-tight md:flex">
        {items.map((item, id) => {
          return (
            <li key={id}>
              {/* <Link href={'/navigate?path=' + item.page.slug}>{item.page.title}</Link> */}
              <Link href={item.page.slug}>{item.page.title}</Link>
            </li>
          )
        })}
      </ul>
      <SocialMedia />
      <Disclosure>
        <DisclosureButton className="group relative z-20 aspect-square w-8 md:hidden">
          <MdOutlineMenu className="absolute inset-0 h-full w-full group-data-open:opacity-0" />
          <MdOutlineMenuOpen className="absolute inset-0 h-full w-full not-group-data-open:opacity-0" />
        </DisclosureButton>
        <DisclosurePanel
          as="ul"
          transition
          className="group absolute inset-0 grid min-h-screen place-content-center gap-y-2xs rounded-sm bg-primary-50 p-3xs text-center font-logo text-lg drop-shadow-md transition duration-200 ease-out data-closed:opacity-0 md:hidden"
        >
          <CloseButton as="li">
            <Link href="/">Home</Link>
          </CloseButton>
          {items.map((item, id) => {
            return (
              <CloseButton as="li" key={id}>
                <Link href={item?.page?.slug}>{item?.page?.title}</Link>
              </CloseButton>
            )
          })}
          <li className="flex place-content-center">
            <SocialMedia />
          </li>
        </DisclosurePanel>
      </Disclosure>
    </nav>
  )
}

function SocialMedia() {
  return (
    <ul className="flex items-center gap-3xs not-group-data-open:opacity-0 md:not-group-data-open:opacity-100">
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
  )
}
