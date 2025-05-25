import { payload } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

export default function Hero({ type, content }) {
  const heroImg = `url(${content?.image?.sizes?.screen?.url})`

  if (type !== 'none')
    return (
      <Suspense>
        <section
          style={{ backgroundImage: heroImg }}
          className="full-bleed animate-fade-in content-around bg-accent-700 bg-cover bg-fixed bg-center py-xl text-primary-50 bg-blend-multiply"
        >
          {type === 'highImpact' && <HighImpact {...content} />}
          {type === 'lowImpact' && <LowImpact {...content} />}
          {type === 'banner' && <Banner {...content} />}
        </section>
      </Suspense>
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
      medium: { url, width, height },
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
      <article className="max-w-220 place-content-center py-xs flow-space">
        <h1 className="text-5xl/26 font-black text-balance">{heading}</h1>
        <h2 className="text-right font-display text-lg lowercase">Writer. Editor. Educator.</h2>
      </article>
      <article className="grid grid-cols-5 items-center gap-x-md bg-accent-800/30 backdrop-brightness-50">
        <Image
          src={url}
          alt={alt}
          width={width}
          height={height}
          className="col-span-2 col-start-4 row-start-1 object-contain"
        />
        <header className="col-span-3 px-md py-sm flow-space">
          <h2 className="text-xl font-black">
            <span className="block font-display text-lg">Latest release:</span>
            {title}
          </h2>
          <RichText data={quotes[1].quote} className="font-bold italic flow-space" />
          <RichText data={description} className="font-bold flow-space" />
          <Link
            href={`/${categoryName}${slug}`}
            // className="my-xs inline-flex font-display text-lg uppercase"
            className="group ml-md inline-flex items-center gap-3xs py-3xs font-display text-lg font-bold uppercase transition duration-150 ease-in hover:translate-x-3xs hover:text-primary-200"
          >
            Buy now
            <MdOutlineKeyboardDoubleArrowRight className="transition duration-150 ease-in group-hover:animate-go" />
          </Link>
          {/* <Link
                    href="https://www.youtube.com/channel/UCb-wzF6DrSslXq3qE61YL7A"
                  >
                    Subscribe Now
                    <MdOutlineKeyboardDoubleArrowRight className="transition duration-150 ease-in group-hover:animate-go" />
                  </Link> */}
        </header>
      </article>
      <Link
        href="#site"
        replace
        className="grid place-items-center gap-y-xs self-end justify-self-center font-display lowercase"
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
    <article>
      <h1 className="text-2xl font-black">{heading}</h1>
    </article>
  )
}
