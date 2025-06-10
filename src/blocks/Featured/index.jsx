import ParallaxBG from '@/components/ParallaxBG'
import { payload } from '@/lib/utils'
import Image from 'next/image'
import { RichText } from '../../components/RichText'
import Slider from './index.client'

export default async function Featured({
  bgImg,
  header: { tagline, title, subtitle },
  body,
  featuredItems,
}) {
  const { docs } = await payload.find({
    collection: 'publications',
    depth: 2,
    sort: '-releaseDate',
    where: {
      id: {
        in: featuredItems.map((item) => item.id),
      },
    },
    select: {
      title: true,
      releaseDetails: true,
      quotes: true,
    },
  })

  return (
    <ParallaxBG fullBleed={true} {...bgImg[0]} className="my-md py-xl">
      <div data-fullbleed="true" className="gap-y-sm">
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
      </div>
    </ParallaxBG>
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
