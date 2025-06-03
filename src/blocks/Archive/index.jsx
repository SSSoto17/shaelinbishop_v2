import { checkAuth } from '@/lib/auth'
import { payload } from '@/lib/utils'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import {
  MdOutlineArrowRight,
  MdOutlineArrowRightAlt,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md'
import { RichText } from '../../components/RichText'

const getContent = async (id) => {
  const { docs } = await payload.find({
    collection: 'publications',
    sort: ['-releaseDate', '-createdAt'],
    where: {
      id: {
        in: id,
      },
      _status: {
        equals: 'published',
      },
    },
  })

  return docs
}

export default async function Archive({ content }) {
  return (
    <section className="relative grid grid-cols-subgrid gap-x-xl">
      <NavSidebar navData={content} />
      {content.map((cat) => {
        return <Group key={cat.id} {...cat} navData={content} />
      })}
    </section>
  )
}

async function NavSidebar({ navData }) {
  const user = await checkAuth()

  return (
    <aside
      className={`sticky ${user ? 'top-27' : 'top-0'} row-span-full hidden content-start gap-y-2xs py-xl lg:col-span-3 lg:-col-end-1 lg:grid`}
    >
      <h2 className="cursor-default font-display text-sm lowercase">Jump to</h2>
      <ul className="font-display font-black lowercase">
        {navData.map(({ title, id }) => {
          const section = '#' + title.replaceAll(' ', '')
          return (
            <li key={id}>
              <Link href={section} replace className="group gap-x-3sm flex items-center">
                <MdOutlineArrowRight className="transition duration-150 ease-in-out not-group-hover:opacity-0" />
                <span className="leading-tight transition duration-200 ease-in-out not-group-hover:-translate-x-6 hover:text-primary-500">
                  {title}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
async function Group({ title, navData, categoryJoin: { docs } }) {
  const data = await getContent(docs)
  const user = await checkAuth()

  return (
    <article
      id={title.replaceAll(' ', '')}
      className="relative col-span-full col-start-1 grid scroll-mt-md gap-y-xs py-md lg:col-span-9 lg:*:col-span-9"
    >
      <header
        className={`sticky col-span-full cursor-default ${user ? 'top-27' : 'top-16 md:top-11'} z-10 bg-primary-50/75 backdrop-blur-xs`}
      >
        <h3 className="hidden font-display text-xl/16 font-bold tracking-tight lowercase lg:block">
          {title}
        </h3>
        <Menu>
          <MenuButton className="group flex w-full items-center justify-between gap-xs font-display text-xl/16 font-bold tracking-tight lowercase lg:hidden">
            {title}
            <span className="inline-flex cursor-default items-center gap-3xs font-display text-sm lowercase">
              Jump to
              <MdOutlineKeyboardArrowDown className="transition duration-300 group-data-open:rotate-180" />
            </span>
          </MenuButton>
          <MenuItems
            anchor="bottom end"
            className="bg-primary-50 p-sm font-display font-black lowercase drop-shadow-md sm:w-auto"
          >
            {navData.map(({ title: catTitle, id }) => {
              const section = '#' + catTitle.replaceAll(' ', '')

              if (title === catTitle) return
              return (
                <MenuItem key={id}>
                  <Link href={section} replace className="group gap-x-3sm flex items-center">
                    <span className="leading-tight transition duration-200 ease-in-out hover:text-primary-500">
                      {catTitle}
                    </span>
                  </Link>
                </MenuItem>
              )
            })}
          </MenuItems>
        </Menu>
      </header>
      <ul className={`grid ${title === 'Short Fiction' ? 'gap-y-xs' : 'gap-y-lg'}`}>
        {data.map((item, id) => {
          if (item.coverImg || item.categoryName === 'Books' || item.categoryName === 'Collections')
            return <CardItem key={id} {...item} />
          return <ListItem key={id} {...item} />
        })}
      </ul>
    </article>
  )
}

function ListItem({ title, releaseDetails: { isPublished, publishedIn } }) {
  const {
    magazine: { title: litMag, date, url },
  } = publishedIn[0]
  return (
    <li className="relative flex justify-between gap-sm border-l-4 border-l-accent-600 p-3xs transition duration-150 ease-in has-hover:text-primary-700">
      <header className="flex flex-wrap items-center gap-x-sm">
        <h3 className="font-bold">{title}</h3>
        <p className="flex items-center gap-2xs font-display text-sm text-primary-800">
          {isPublished == 'Published' ? `${litMag}, ${date}` : isPublished}
          <MdOutlineArrowRightAlt className="transition duration-150 group-hover:translate-x-3xs sm:hidden" />
        </p>
      </header>
      <Link
        href={url}
        target="_blank"
        className="group flex flex-none items-center gap-3xs font-display text-sm/4 font-bold uppercase transition duration-150 not-hover:opacity-0 after:absolute after:inset-0"
      >
        Read now{' '}
        <MdOutlineArrowRightAlt className="transition duration-150 group-hover:translate-x-3xs" />
      </Link>
    </li>
  )
}

function CardItem({
  title,
  slug,
  releaseDetails: { isPublished, publishedDate },
  description,
  coverImg,
  categoryName,
}) {
  return (
    <li className="@container relative grid grid-cols-6 items-center gap-x-sm gap-y-md @md:gap-x-lg">
      <article className="peer order-2 col-span-full flow-space @sm:col-span-4">
        <header>
          {/* <header className="flex items-end gap-sm"> */}
          <h3 className="leading-tight font-bold">
            <Link
              href={`/${categoryName.toLowerCase()}${slug}`}
              className="after:absolute after:inset-0 hover:text-primary-700"
            >
              {title}
            </Link>
          </h3>
          <p className="cursor-default font-display text-sm">{publishedDate || isPublished}</p>
          <RichText data={description} className="py-xs rich-text" />
        </header>
        <Link
          href={`/books${slug}`}
          className="group isolate inline-flex items-center font-display text-sm/4 lowercase underline transition duration-150 hover:text-primary-600"
        >
          Read more{' '}
          <MdOutlineArrowRightAlt className="transition duration-150 not-group-hover:opacity-0 group-hover:translate-x-3xs" />
        </Link>
      </article>
      <Link
        href={`/books${slug}`}
        className="col-span-full grid transition duration-300 peer-has-[h3_a:hover]:opacity-75 hover:opacity-75 @sm:col-span-2"
      >
        <BookCover {...coverImg} />
      </Link>
    </li>
  )
}

export function BookCover({ alt, sizes }) {
  if (!sizes)
    return (
      <div className="@container grid aspect-[2/3] max-w-96 cursor-default place-content-center bg-secondary-300 p-md text-center font-display text-2xl/16 font-bold text-accent-800 uppercase">
        <p className="text-xl @sm:text-2xl/16 @md:text-3xl/20">Coming soon</p>
      </div>
    )

  const {
    small: { url, width, height },
  } = sizes
  return (
    <Image
      src={url}
      alt={alt}
      width={width}
      height={height}
      className="aspect-[2/3] w-full max-w-96 object-cover"
    />
  )
}
