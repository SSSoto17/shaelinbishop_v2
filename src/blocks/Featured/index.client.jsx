'use client'
import { useIntersectionObserver } from '@uidotdev/usehooks'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MdArrowRightAlt } from 'react-icons/md'
import { RichText } from '../../components/RichText'

export default function Slider({ data }) {
  const [active, setActive] = useState(data[0].title)

  function handleScroll(card) {
    setActive(card)
    const activeCard = document.getElementById(card)
    activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }

  return (
    <>
      <ul className="col-span-full scrollbar-hidden flex snap-x snap-mandatory gap-x-md overflow-x-auto px-[max(var(--spacing-md),_50svw-1120px/2)] *:flex-[1_0_min(1120px/3,100%)] *:scroll-mx-4 lg:col-start-2 lg:-col-end-2 lg:row-span-3 lg:grid lg:grid-cols-3 lg:px-0 xl:col-start-4 xl:row-start-3 xl:py-md">
        {data.map((item, id) => {
          return <FeaturedCard key={id} {...item} setState={setActive} />
        })}
      </ul>
      <ul className="flex justify-center gap-sm py-sm lg:hidden">
        {data.map(({ title }, id) => {
          return (
            <li
              key={id}
              onClick={() => handleScroll(title)}
              className={`aspect-square w-2xs cursor-pointer rounded-full hover:bg-primary-50 ${active === title ? 'bg-primary-50' : 'bg-primary-50/50'}`}
            />
          )
        })}
      </ul>
    </>
  )
}

function FeaturedCard({ title, releaseDetails: { publishedIn }, quotes, setState }) {
  const [ref, entry] = useIntersectionObserver({
    threshold: 1.0,
    root: null,
    rootMargin: '0px',
  })

  useEffect(() => {
    if (entry?.isIntersecting) {
      setState(title)
    }
  }, [entry])

  const {
    magazine: { title: magTitle, url },
  } = publishedIn[publishedIn.length - 1]

  return (
    <li
      ref={ref}
      id={title}
      className="relative row-span-3 grid snap-center grid-rows-subgrid gap-y-2xs bg-primary-50 px-sm py-md drop-shadow-md transition duration-150 ease-in hover:scale-102"
    >
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
