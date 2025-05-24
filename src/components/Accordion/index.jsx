import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import Image from 'next/image'
import { RichText } from '../RichText'

export function Accordionv1({
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
          <RichText data={a} />
        </DisclosurePanel>
      </div>
    </Disclosure>
  )
}

export default function Accordion({ heading, questions: qs }) {
  return (
    <TabGroup as="section" vertical className="full-bleed gap-2xl border-y border-y-primary-700">
      <article className="span-1/3 grid grid-cols-subgrid content-start gap-y-lg border-r border-r-primary-700 py-2xl">
        <h2 className="col-span-full col-start-2 cursor-default px-md text-right font-bold">
          {heading}
        </h2>
        <TabList as="ul" className="span-1/3 col-span-full grid grid-cols-subgrid gap-xs">
          {qs.map(({ q }, id) => {
            return (
              <Tab
                as="li"
                key={id}
                className="col-span-full grid cursor-pointer grid-cols-subgrid border-r border-r-primary-700 bg-accent-200 px-md py-2xs text-right font-display text-sm lowercase transition duration-150 data-active:bg-accent-700 data-active:text-accent-50 data-hover:bg-accent-300 data-selected:bg-accent-700 data-selected:text-accent-50 data-selected:hover:bg-accent-500"
              >
                <p className="col-span-full col-start-2">{q}</p>
              </Tab>
            )
          })}
        </TabList>
      </article>
      <TabPanels className="span-2/3 grid grid-cols-subgrid content-center">
        {qs.map(({ q, a }, id) => {
          return (
            <TabPanel key={id} className="col-span-full -col-end-2 animate-fade-in flow-space">
              <h3 className="font-black">{q}</h3>
              <RichText
                data={a}
                className="flow-space [&_a]:underline [&_a]:transition [&_a]:duration-150 [&_a]:ease-in [&_a]:hover:text-primary-600"
              />
              {/* <p>{a}</p> */}
            </TabPanel>
          )
        })}
      </TabPanels>
    </TabGroup>
  )
}
