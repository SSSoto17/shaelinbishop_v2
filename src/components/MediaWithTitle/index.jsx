import Image from 'next/image'
import Link from 'next/link'

export default function MediaWithTitle({ images, tagline, title, link }) {
  return (
    <section className="grid grid-cols-3 gap-x-md-lg gap-y-sm py-lg">
      {images.map(({ sizes, alt }, id) => {
        return (
          <Image
            key={id}
            src={sizes.card.url}
            alt={alt}
            width={sizes.card.width}
            height={sizes.card.height}
            className="self-stretch object-cover first-of-type:row-span-2 last-of-type:aspect-square"
          />
        )
      })}
      <h2 className="col-span-2 self-center text-3xl/20 font-bold text-balance">
        <Link href={link} className="transition duration-150 ease-in hover:text-primary-700">
          <span className="block font-display text-lg/12 font-normal uppercase">{tagline}</span>
          {title}
        </Link>
      </h2>
    </section>
  )
}
