import Image from 'next/image'
import Link from 'next/link'
import { RichText } from '../../components/RichText'

import { MdArrowRightAlt } from 'react-icons/md'

export default function AuthorBio({
  headshot: {
    alt,
    sizes: {
      small: { url, width, height },
    },
  },
  tagline,
  headline,
  body,
}) {
  return (
    <section className="place-items-center gap-x-xl-2xl gap-y-lg py-xl-2xl">
      <Image
        src={url}
        alt={alt}
        width={width}
        height={height}
        className="col-span-full self-stretch object-cover sm:order-2 sm:col-span-6 md:col-span-5"
      />
      <article className="col-span-full cursor-default flow-space sm:col-span-6 md:col-span-7">
        <header>
          <h2 className="text-3xl/14 font-black text-balance lg:leading-22">
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
