import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import Link from 'next/link'
import { MdInfo, MdOutlineArrowRightAlt } from 'react-icons/md'
import { RichText } from '../../components/RichText'

export default function ListBlock({ header: { title, subtitle }, body, list }) {
  return (
    <section className="py-xl *:col-span-full">
      <header style={{ '--flow-space': '.25em' }} className="pb-md flow-space md:pb-2xl">
        <h1 className="max-w-180 text-2xl font-bold text-balance">{title}</h1>
        <h2 className="font-display text-lg lowercase">{subtitle}</h2>
      </header>
      <article className="flow-space">
        <RichText data={body} className="max-w-prose flow-space" />
        <ul className="grid gap-lg gap-x-xl py-md md:grid-cols-2 md:gap-y-2xl">
          {list.map(({ itemType, listCard, listButton }, id) => {
            if (itemType === 'Card') return <ListCard key={id} {...listCard} />
            if (itemType === 'Button') return <ListButton key={id} {...listButton} />
          })}
        </ul>
      </article>
    </section>
  )
}

function ListCard({ title, rate, description, note }) {
  return (
    <li className="@container row-span-2 grid grid-rows-subgrid gap-y-sm border-l-4 border-accent-700 px-lg py-md">
      <header className="max-w-180 content-end items-end gap-x-lg gap-y-3xs @sm:flex @sm:justify-between @sm:py-md">
        <h2 className="leading-6 font-bold">{title}</h2>
        <div className="flex flex-none items-center gap-x-2xs">
          <p className="font-display text-sm">{rate}</p>
          {note && (
            <Popover className="grid items-center self-end justify-self-end">
              <PopoverButton className="cursor-pointer text-accent-700 transition duration-150 ease-in hover:text-accent-600 data-open:text-accent-700">
                <MdInfo className="text-lg" />
              </PopoverButton>
              <PopoverPanel
                anchor={{
                  to: 'bottom end',
                  gap: 'var(--spacing-3xs)',
                  padding: 'var(--spacing-md)',
                }}
                as="aside"
                transition
                className="w-108 gap-xs rounded-xs bg-accent-200 px-sm py-md font-display text-sm transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0"
              >
                <RichText data={note} />
              </PopoverPanel>
            </Popover>
          )}
        </div>
      </header>
      <RichText data={description} className="row-start-3 max-w-prose rich-text flow-space" />
    </li>
  )
}

function ListButton({
  label,
  body,
  internalLink: {
    targetPage: { slug },
    targetSection,
  },
  externalLink: { url, targetType },
}) {
  const href = `${slug}${targetSection ? targetSection : ''}`

  console.log(href)
  return (
    <li className="row-span-3 grid content-center gap-y-xs md:gap-y-md md:px-lg">
      <RichText data={body} className="cursor-default font-display" />
      <Link
        href={url || href}
        target={targetType && targetType}
        scroll
        className="group flex items-center justify-center gap-2xs bg-accent-900 px-md py-sm font-display text-primary-50 uppercase transition duration-150 hover:bg-accent-800"
      >
        {label}
        <MdOutlineArrowRightAlt
          size={28}
          className="transition duration-150 group-hover:translate-x-2"
        />
      </Link>
    </li>
  )
}
