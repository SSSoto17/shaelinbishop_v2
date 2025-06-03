import Image from 'next/image'
import { RichText } from '../../components/RichText'

export default function MediaBlock({
  image: {
    alt,
    sizes: {
      medium: { url, width, height },
    },
  },
  tagline,
  heading,
  description,
}) {
  return (
    <section className="items-center gap-x-2xl gap-y-md py-lg md:py-2xl">
      <Image
        src={url}
        alt={alt}
        width={width}
        height={height}
        priority
        className="col-span-full max-h-160 self-stretch justify-self-center object-cover md:col-span-5 lg:col-span-6"
      />
      <article className="col-span-full cursor-default flow-space md:col-span-7 md:text-sm lg:col-span-6 [&_p]:md:max-w-110">
        <header>
          <h1 className="text-2xl/18 font-black text-balance">
            <span className="block text-lg leading-4 font-bold sm:leading-10">{tagline}</span>
            {heading}
          </h1>
        </header>
        <RichText data={description} className="max-w-prose flow-space" />
      </article>
    </section>
  )
}
