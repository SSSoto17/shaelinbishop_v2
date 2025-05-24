import Link from 'next/link'

export default function Hero({ type, content }) {
  const heroImg = `url(${content?.image?.sizes?.screen?.url})`

  if (type !== 'none')
    return (
      <section
        style={{ backgroundImage: heroImg }}
        className="full-bleed content-around bg-accent-500 bg-cover bg-fixed bg-center py-xl text-primary-50 bg-blend-multiply"
      >
        {type === 'highImpact' && <HighImpact {...content} />}
        {type === 'lowImpact' && <LowImpact {...content} />}
        {type === 'banner' && <Banner {...content} />}
      </section>
    )

  return null
}

import { MdOutlineArrowDropDownCircle } from 'react-icons/md'
// LARGE HERO
function HighImpact({ heading }) {
  return (
    <>
      <article className="place-content-center py-xs flow-space">
        <h1 className="font-display text-4xl/26 font-bold tracking-tighter text-balance uppercase">
          {heading}
        </h1>
        {/* <h2 className="text-lg font-black">Nanum Myeongjo</h2> */}
        <h2 className="font-display text-lg lowercase">Writer. Editor. Educator.</h2>
        <p className="max-w-prose font-bold tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad vitae, voluptatibus
          repellendus enim, maiores vel animi neque id magni dolores adipisci accusantium cupiditate
          ipsa est, excepturi dolorum. Et, eligendi repellendus!
        </p>
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
