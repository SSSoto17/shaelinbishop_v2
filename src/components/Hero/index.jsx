import { payload } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

export default function Hero({ type, content }) {
  const heroImg = `url(${content?.image?.sizes?.screen?.url})`

  if (type !== 'none')
    return (
      <section
        style={{ backgroundImage: heroImg }}
        className="full-bleed animate-fade-in place-content-end bg-cover bg-fixed bg-center py-sm text-primary-50"
      >
        {type === 'highImpact' && <HighImpact {...content} />}
        {type === 'lowImpact' && <LowImpact {...content} />}
        {type === 'banner' && <Banner {...content} />}
      </section>
    )

  return null
}

import { MdOutlineArrowDropDownCircle } from 'react-icons/md'
import { RichText } from '../RichText'
// LARGE HERO
async function HighImpact({
  heading,
  promoImg: {
    alt,
    sizes: {
      small: { url, width, height },
    },
  },
}) {
  const { title, description, quotes, slug, categoryName } = await payload
    .find({
      collection: 'publications',
      limit: 1,
      where: {
        title: {
          equals: 'Honey Vinegar',
        },
      },
    })
    .then(({ docs }) => docs[0])

  return (
    <>
      <article className="max-w-220 cursor-default place-content-center justify-self-end flow-space *:col-span-full">
        <h1 className="text-5xl/26 font-black text-balance">{heading}</h1>
        <h2 className="text-right font-display text-lg lowercase">Writer. Editor. Educator.</h2>
      </article>

      <Link
        href="#site"
        replace
        className="grid place-items-center gap-y-xs self-end justify-self-center font-display lowercase *:col-span-full"
        aria-label="Jump to Site"
      >
        <MdOutlineArrowDropDownCircle className="peer order-2 text-xl transition duration-150 hover:translate-y-2xs" />
        <p className="transition duration-150 not-peer-hover:opacity-30 peer-hover:-translate-y-3xs">
          Enter Site
        </p>
      </Link>
    </>
  )
}

function Promo() {
  return (
    <>
      <article className="col-span-10 col-start-4 grid grid-cols-5 items-center gap-x-md">
        {/* <article className="grid grid-cols-5 items-center gap-x-md bg-accent-800/30 backdrop-brightness-50"> */}
        <Image
          src={url}
          alt={alt}
          width={width}
          height={height}
          className="col-span-2 col-start-4 row-start-1 object-cover"
        />
        <header className="col-span-3 flow-space">
          <h2 className="text-xl/14 font-black">
            <span className="block font-display text-base/6">Latest release:</span>
            {title}
          </h2>
          <RichText data={quotes[1].quote} className="font-bold italic flow-space" />
          {/* <RichText data={description} className="text-sm font-bold flow-space" /> */}
          <Link
            href={`/${categoryName}${slug}`}
            className="group ml-sm inline-flex items-center gap-3xs font-display text-lg font-bold uppercase transition duration-150 ease-in hover:translate-x-3xs hover:text-primary-200"
          >
            Buy now
            <MdOutlineKeyboardDoubleArrowRight className="transition duration-150 ease-in group-hover:animate-go" />
          </Link>
        </header>
      </article>
    </>
  )
}

// SMALL HERO
function LowImpact({ heading }) {
  return (
    <article className="justify-self-end">
      <h1 className="font-display text-2xl font-bold tracking-tighter">{heading}</h1>
      <p className="max-w-prose">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores labore molestias provident
        voluptas earum, minus magni quas sapiente recusandae saepe doloribus cumque ratione
        inventore aut placeat expedita dolorum vitae. Optio?
      </p>
    </article>
  )
}

// BANNER
function Banner({ heading }) {
  return (
    <article className="py-md *:col-span-full">
      <h1 className="text-2xl/10 font-black text-primary-900 md:text-2xl/14">{heading}</h1>
    </article>
  )
}
