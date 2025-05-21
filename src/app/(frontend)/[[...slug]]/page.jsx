import { Content } from '@/components'
import LivePreview from '@/hooks/LivePreview'
import { getPage, getPages } from '@/lib/pages'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

// GENERATING PARAMS
export async function generateStaticParams() {
  const pages = await getPages(
    { slug: true },
    {
      slug: {
        not_equals: '/home',
      },
    },
  )

  return pages.map(({ slug }) => ({
    slug: [slug],
  }))
}

// PAGE
export default async function Page({ params }) {
  const { slug = 'home' } = await params
  const { isEnabled } = await draftMode()

  const page = await getPage(null, { slug: { equals: `/${slug}` } }, isEnabled)

  if (!page) {
    notFound()
  }

  return (
    // <main id="main" className="full-bleed scroll-m-xl-2xl">
    <main id="main" className="full-bleed snap-y snap-start scroll-m-xl-2xl">
      {isEnabled && <LivePreview />}
      <Content {...page} />
      {slug[0] === 'about' && <AboutHardcoded />}
      {slug[0] === 'services' && <ServicesHardcoded />}
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

import Link from 'next/link'
import { MdInfo, MdOutlineArrowRightAlt } from 'react-icons/md'

function ServicesHardcoded() {
  const services = [
    {
      title: 'Short story or first chapter critique',
      rate: '0.04$ CAD/word',
      description:
        'A detailed analysis of your short story or first chapter, up to 5000 words, with in-line comments to improve style, clarity, and flow, as well as a 2-3 page edit letter with big picture suggestions to address logic, character, structure, conflict, point of view, and form.',
    },
    {
      title: 'Project Development',
      rate: '80$ CAD/1hr',
      description:
        'Need help developing an idea in progress? Shaelin will review your in-progress materials, and work with you to develop your project, identify possible problems, and brainstorm solutions.',
      note: "One 1 hr consultation 80$ CAD, further sessions 60$ CAD. This rate includes Shaelin's time analyzing your materials beforehand and prepping suggestions and solutions.",
    },
    {
      title: 'Developmental Edit',
      rate: '0.05$ CAD/word',
      description:
        'A detailed edit letter that examines your novel’s structure, style, character development, thematic development, setting and world, and point of view. This will also include in-line comments for story and character based suggestions.',
    },
    {
      title: 'Line Edit',
      rate: '0.03$ CAD/word',
      description:
        'Detailed in-line comments to improve style, clarity, flow, word choice, grammar, and sentence or paragraph structure.',
      note: 'Standard rate is 0.03$ CAD/word but I may offer increased rates for projects that require much more substantial line editing, or reduced rates for projects that require minimal line editing.',
    },
    {
      title: 'Developmental + Line Edit',
      rate: '0.07$ CAD/word',
      description:
        'Both a detailed edit letter and in-line comments, addressing both story and stylistic elements at once.',
      note: 'Standard rate is 0.07$ CAD/word but I may offer increased rates for projects that require much more substantial line editing, or reduced rates for projects that require minimal line editing.',
    },
  ]

  return (
    <section className="py-xl">
      <header style={{ '--flow-space': '.25em' }} className="pb-2xl flow-space">
        <h1 className="max-w-180 text-2xl font-bold text-balance">
          Editing and Critiquing Services
        </h1>
        <h2 className="font-display text-lg lowercase">For writers</h2>
      </header>
      <article className="flow-space">
        <p className="max-w-prose">
          Shaelin is available for editing services with the following rates:
        </p>
        <ul className="grid grid-cols-2 gap-x-xl gap-y-2xl py-md">
          {services.map(({ title, rate, description, note }, id) => {
            return (
              <li
                key={id}
                className="row-span-3 grid grid-rows-subgrid gap-y-0 border-l-4 border-accent-700 px-lg"
              >
                <header className="flex max-w-180 items-end justify-between gap-lg py-md">
                  <h2 className="leading-tight font-bold">{title}</h2>
                  <p className="flex-none font-display text-sm">{rate}</p>
                </header>
                <article className="py-xs flow-space">
                  <p className="max-w-prose text-sm">{description}</p>
                  {note && (
                    <aside className="flex max-w-180 gap-xs bg-accent-200 px-sm py-md font-display text-xs">
                      <MdInfo size={28} className="flex-none text-accent-700" />
                      <p>{note}</p>
                    </aside>
                  )}
                </article>
              </li>
            )
          })}
          <li className="row-span-3 grid content-center gap-y-md px-lg">
            <p className="cursor-default font-display">Ready to work on your project?</p>
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2xs bg-accent-900 px-md py-sm font-display text-primary-50 uppercase transition duration-150 hover:bg-accent-800"
            >
              Contact Now
              <MdOutlineArrowRightAlt
                size={28}
                className="transition duration-150 group-hover:translate-x-2"
              />
            </Link>
          </li>
        </ul>
      </article>
    </section>
  )
}
