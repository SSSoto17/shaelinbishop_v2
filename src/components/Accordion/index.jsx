import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Image from 'next/image'

export default function Accordion({
  image: {
    alt,
    sizes: {
      medium: { url, width, height },
    },
  },
  heading,
  questions,
}) {
  return (
    <section className="full-bleed gap-2xl border-y border-y-primary-700">
      <article className="span-1/3 grid grid-cols-subgrid content-start gap-y-lg py-2xl">
        <Image
          src={url}
          width={width}
          height={height}
          alt={alt}
          className="col-span-full col-start-2 min-h-140 object-cover"
        />
        {/* <div className="img-placeholder col-start-2 h-180" /> */}
      </article>
      <article className="span-2/3 grid grid-cols-subgrid content-end border-l border-primary-700 py-2xl">
        <header className="col-span-full border-b border-primary-700 font-bold">
          <h2 className="px-md py-2xs">{heading}</h2>
        </header>
        <ul className="col-span-full grid grid-cols-subgrid gap-xs py-xl">
          {questions.map((q, id) => {
            return <Question key={id} {...q} />
          })}
        </ul>
      </article>
    </section>
  )
}

function Question({ q, a }) {
  return (
    <Disclosure
      as="li"
      className="col-span-full grid cursor-default grid-cols-subgrid overflow-clip bg-secondary-200 px-md py-sm duration-200 hover:bg-secondary-300 has-data-open:bg-accent-700 has-data-open:text-accent-50 has-data-open:hover:bg-accent-500"
    >
      <DisclosureButton
        transition
        className="col-span-full cursor-pointer text-left font-display text-sm lowercase"
      >
        {q}
      </DisclosureButton>
      <div className="col-span-full -col-end-2 overflow-clip has-data-open:py-sm">
        <DisclosurePanel
          transition
          className="origin-top transition duration-300 ease-in-out data-closed:h-0 data-closed:-translate-y-6 data-closed:opacity-0"
        >
          {a}
        </DisclosurePanel>
      </div>
    </Disclosure>
  )
}
