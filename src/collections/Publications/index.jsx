import { BookCover } from '@/blocks/Archive'
import { RichText } from '@/components/RichText'
import Link from 'next/link'
import { Fragment } from 'react'
import { MdOutlineArrowLeft } from 'react-icons/md'

function RenderContent({
  title,
  slug,
  coverImg,
  blurb,
  quotes,
  testimonials,
  releaseDetails,
  categoryName,
  retailerLinks,
}) {
  const breadcrumbs = [
    { label: categoryName, url: `/work#${categoryName}` },
    { label: title, url: `/${categoryName.toLowerCase()}${slug}` },
  ]

  return (
    <section className="grid auto-rows-min grid-cols-subgrid items-start gap-x-xl gap-y-md-lg py-md md:gap-y-0 md:py-xl">
      <Breadcrumbs data={breadcrumbs} />
      <figure className="col-span-full grid place-items-center gap-y-sm md:col-span-5">
        {/* <Image src={url} alt={alt} width={width} height={height} className="w-full object-cover" /> */}
        <BookCover {...coverImg} />
        {/* links to book retailers */}
        {Boolean(retailerLinks.length) && <RetailerLinks data={retailerLinks} />}
      </figure>
      <article className="col-span-full flow-space md:col-span-7">
        <header className="cursor-default">
          <h1 className="text-2xl font-black md:text-xl">{title}</h1>
          {quotes && (
            <blockquote className="max-w-prose py-xs italic">
              <RichText data={quotes[0]?.quote} disableContainer />
            </blockquote>
          )}
        </header>
        <RichText data={blurb} className="max-w-prose flow-space md:text-sm" />
      </article>
    </section>
  )
}

function Breadcrumbs({ data }) {
  return (
    <ul className="group col-span-full flex items-center gap-xs py-xs font-display lowercase">
      <li className="transition duration-150 ease-in-out not-group-hover:translate-x-2">
        <MdOutlineArrowLeft size={32} />
      </li>
      {/* <li className="transition duration-150 ease-in-out group-hover:translate-x-2">
          <MdOutlineArrowRight size={32} />
        </li> */}
      <li>/</li>
      {data.map(({ label, url }, id) => {
        return (
          <Fragment key={id}>
            <li className="transition duration-150 ease-in-out hover:text-primary-600">
              <Link href={url}>{label}</Link>
            </li>
            <li className="cursor-default last:hidden">/</li>
          </Fragment>
        )
      })}
    </ul>
  )
}

function RetailerLinks({ data }) {
  return (
    <section className="max-w-120 flow-space">
      <h2 className="text-center font-display leading-tight font-bold uppercase">Buy now:</h2>
      <ul className="flex flex-wrap justify-evenly gap-xs text-center font-display text-sm/5 font-bold text-accent-700 uppercase">
        {data.map((retailer, id) => {
          return <LinkButton key={id} {...retailer} />
        })}
      </ul>
    </section>
  )
}

function LinkButton({ retailer, url }) {
  return (
    <li className="group min-h-12 flex-1/4 transition duration-150 ease-in-out hover:scale-105">
      <Link
        href={url}
        target="_blank"
        className="flex h-full min-w-24 place-content-center items-center px-2xs py-3xs outline-4 outline-accent-600 group-hover:bg-accent-800 group-hover:text-primary-50 group-hover:outline-accent-800"
      >
        {retailer}
      </Link>
    </li>
  )
}

export { RenderContent as PublicationContent }
