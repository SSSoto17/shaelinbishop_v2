import Image from 'next/image'
import { RichText } from '../RichText'

export default function MediaBlock({
  image: {
    alt,
    sizes: {
      large: { url, width, height },
    },
  },
  tagline,
  heading,
  description,
}) {
  return (
    <section className="grid grid-cols-subgrid items-center gap-2xl py-3xl">
      <Image
        src={url}
        alt={alt}
        width={width}
        height={height}
        className="span-1/2 self-stretch object-cover"
      />
      <article className="span-1/2 cursor-default flow-space md:text-sm [&_p]:md:max-w-110">
        <header>
          <h1 className="text-2xl/18 font-black text-balance">
            <span className="block text-lg/10 font-bold">{tagline}</span>
            {heading}
          </h1>
        </header>
        <RichText data={description} className="rich-text" />
      </article>
    </section>
  )
}
