import Image from 'next/image'
import Link from 'next/link'

export default function MediaWithTitle({ images, tagline, title, link }) {
  return (
    <section className="gap-x-xs gap-y-sm lg:gap-x-md-lg">
      {images.map(({ sizes, alt }, id) => {
        return (
          <Image
            key={id}
            src={sizes.card.url}
            alt={alt}
            width={sizes.card.width}
            height={sizes.card.height}
            className="col-span-6 self-stretch object-cover first-of-type:row-span-2 last-of-type:aspect-square sm:col-span-4 sm:first-of-type:row-span-3"
          />
        )
      })}
      <h2 className="col-span-6 cursor-default self-end font-display text-lg/8 uppercase lg:leading-12">
        {tagline}
      </h2>
      <h3 className="col-span-full self-center text-right text-3xl/12 font-bold text-balance sm:col-start-5 sm:text-left sm:leading-18">
        <Link href={link} className="transition duration-150 ease-in hover:text-primary-700">
          {title}
        </Link>
      </h3>
    </section>
  )
}
