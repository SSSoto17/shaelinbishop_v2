import { payload } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { RichText } from '../RichText'
import Slider from './index.client'

export default async function Featured({
  bgImg,
  header: { tagline, title, subtitle },
  body,
  featuredItems,
}) {
  const query = featuredItems.map((item) => item.id)
  const img = `url(${bgImg[0].url})`

  const { docs } = await payload.find({
    collection: 'publications',
    depth: 2,
    sort: '-releaseDate',
    where: {
      id: {
        in: query,
      },
    },
    select: {
      title: true,
      releaseDetails: true,
      quotes: true,
    },
  })

  return (
    <section
      style={{ backgroundImage: img }}
      className="full-bleed bg-cover bg-fixed py-xl"
      // className="relative"
    >
      <div className="full-bleed gap-y-sm">
        {/* <div className="grid grid-cols-subgrid grid-rows-5"> */}
        <Image
          src={bgImg[1].sizes?.medium?.url}
          alt=""
          width={bgImg[1].sizes?.medium?.width}
          height={bgImg[1].sizes?.medium?.height}
          className="col-span-4 col-start-2 row-span-5 row-start-1 hidden self-stretch border border-primary-50 object-cover xl:block"
        />
        <article className="content-end xl:col-span-6 xl:col-start-7 xl:row-start-2">
          <header className="col-span-full cursor-default">
            {title && (
              <h2 className="text-2xl/12 font-black">
                <span className="block font-display text-base/6 font-bold lg:leading-12">
                  {tagline}
                </span>
                {title}
              </h2>
            )}
            {subtitle && <h3>{subtitle}</h3>}
          </header>
          {body && <RichText data={body} />}
        </article>
        <Slider data={docs} />
        {/* <ul className="col-span-full flex snap-x snap-mandatory gap-sm overflow-x-scroll px-[max(1rem,_50svw-1120px/2)] *:flex-[1_0_100%] *:scroll-mx-4">
          <ul className="col-span-full col-start-2 row-span-3 row-start-3 grid grid-cols-3 gap-x-md py-md">
          {docs.map((item, id) => {
            return <FeaturedCard key={id} {...item} />
          })}
        </ul> */}
      </div>
    </section>
  )
}

import { MdArrowRightAlt } from 'react-icons/md'

function FeaturedCard({ title, releaseDetails: { publishedIn }, quotes }) {
  const {
    magazine: { title: magTitle, url },
  } = publishedIn[publishedIn.length - 1]

  return (
    <li className="relative row-span-3 grid snap-center grid-rows-subgrid gap-y-2xs bg-primary-50 px-sm py-md drop-shadow-md transition duration-150 ease-in hover:scale-102">
      <h4 className="self-center text-lg/10 font-bold">
        <Link href={url} target="_blank" className="after:absolute after:inset-0">
          {title}
        </Link>
      </h4>
      {quotes.map(({ quote }, id) => {
        return (
          <blockquote key={id} className="ml-2xs py-sm">
            <RichText data={quote} className="rich-text" />
          </blockquote>
        )
      })}
      <p className="row-start-3 text-sm/10">
        Read now in{' '}
        <Link
          href={url}
          target="_blank"
          className="group isolate flex items-center gap-3xs text-base/6 font-bold transition duration-150 ease-in hover:text-primary-700"
        >
          {magTitle}
          <MdArrowRightAlt className="transition duration-150 ease-in not-group-hover:-translate-x-3xs" />
        </Link>
      </p>
    </li>
  )
}

// function ParallaxScroll({ sizes, alt }) {
//   const img = `url(${sizes?.screen.url})`

//   return (
//     <section style={{ backgroundImage: img }} className="relative -z-10 py-4xl text-primary-50">
//       <article className="absolute inset-0 full-bleed backdrop-blur-md" />
//       <article
//         style={{ backgroundImage: img }}
//         className="absolute top-50 bottom-50 z-0 w-120 border border-primary-50 bg-right"
//       />
//       <h2 className="z-10 place-self-end font-display text-2xl">Scrolling...</h2>
//       {/* <Image
//         src={sizes?.screen.url}
//         alt={alt}
//         width={sizes?.screen.width}
//         height={sizes?.screen.height}
//         className="absolute inset-0 z-10 full-bleed h-screen object-cover"
//       /> */}
//     </section>
//   )
// }

// function ImginImg({ sizes, alt }) {
//   const img = `url(${sizes?.screen.url})`

//   return (
//     <section
//       style={{ backgroundImage: img }}
//       className="relative -z-10 full-bleed min-h-screen place-content-center gap-y-lg bg-cover bg-fixed py-3xl text-primary-50"
//     >
//       <article className="absolute inset-0 -z-10 full-bleed backdrop-blur-md" />
//       {/* <article className="row-span-3 w-50 border border-primary-50 backdrop-blur-3xl" /> */}
//       <h2 className="justify-self-end font-display text-2xl">Scrolling...</h2>
//       <Image
//         src={sizes?.screen.url}
//         alt={alt}
//         width={sizes?.screen.width}
//         height={sizes?.screen.height}
//         className="border border-primary-50"
//       />
//     </section>
//   )
// }
