import Image from 'next/image'
import Link from 'next/link'
import { RichText } from '../RichText'

import { MdArrowRightAlt } from 'react-icons/md'

export default function AuthorBio({
  headshot: {
    alt,
    sizes: {
      card: { url, width, height },
    },
  },
  tagline,
  headline,
  body,
}) {
  return (
    <section className="grid-cols-subgrid items-center gap-x-xl-2xl py-xl-2xl sm:grid">
      <Image
        src={url}
        alt={alt}
        width={width}
        height={height}
        className="self-stretch object-cover sm:col-span-full lg:order-2 lg:col-span-5"
      />
      <article className="col-span-7 cursor-default flow-space">
        <header>
          <h2 className="text-3xl/22 font-black text-balance">
            <span className="block text-lg/10 font-bold">{tagline}</span>
            {headline}
          </h2>
        </header>
        <RichText data={body} className="max-w-prose text-pretty flow-space" />
        <Link
          href="/about"
          className="group inline-flex items-center gap-3xs self-end underline transition duration-150 ease-in hover:text-primary-700"
        >
          Learn more
          <MdArrowRightAlt className="transition duration-150 ease-in not-group-hover:-translate-x-3xs not-group-hover:opacity-0" />
        </Link>
      </article>
    </section>
  )
}
