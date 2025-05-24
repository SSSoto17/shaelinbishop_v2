import { checkAuth } from '@/lib/auth'
import { payload } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineArrowRight, MdOutlineArrowRightAlt } from 'react-icons/md'
import { RichText } from '../RichText'

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
    <section className="grid grid-cols-subgrid gap-x-xl">
      <NavSidebar navData={content} />
      {content.map((cat) => {
        return <Group key={cat.id} {...cat} />
      })}
    </section>
  )
}

async function NavSidebar({ navData }) {
  const user = await checkAuth()

  return (
    <aside
      className={`sticky ${user ? 'top-27' : 'top-lg'} col-span-3 -col-end-1 row-span-full grid content-start gap-y-2xs py-xl`}
    >
      <h2 className="cursor-default font-display text-sm lowercase">Jump to</h2>
      <ul className="font-display font-black lowercase">
        {navData.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link
                href={`#${title.replaceAll(' ', '')}`}
                replace
                className="group gap-x-3sm flex items-center"
              >
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

async function Group({ title, categoryJoin: { docs } }) {
  const data = await getContent(docs)
  const user = await checkAuth()

  return (
    <article id={title.replaceAll(' ', '')} className="col-span-9 grid scroll-mt-md gap-y-xs py-md">
      <header
        className={`sticky col-span-9 cursor-default ${user ? 'top-27' : 'top-lg'} z-10 bg-primary-50/75 backdrop-blur-xs`}
      >
        <h3 className="font-display text-xl/16 font-bold tracking-tight lowercase">{title}</h3>
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
  console.log(publishedIn)
  const {
    magazine: { title: litMag, date, url },
  } = publishedIn[0]
  return (
    <li className="relative flex justify-between gap-sm border-l-4 border-l-accent-600 p-3xs transition duration-150 ease-in has-hover:text-primary-700">
      <header className="flex flex-wrap items-center gap-x-sm">
        <h3 className="font-bold">{title}</h3>
        <p className="font-display text-sm text-primary-800">
          {isPublished == 'Published' ? `${litMag}, ${date}` : isPublished}
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
  releaseDetails: { isPublished, publishedDate },
  description,
  coverImg,
}) {
  return (
    <li className="relative grid grid-cols-6 items-center gap-x-lg">
      <article className="peer order-2 col-span-4 flow-space">
        <header>
          {/* <header className="flex items-end gap-sm"> */}
          <h3 className="leading-tight font-bold">
            <Link href="/" className="after:absolute after:inset-0 hover:text-primary-700">
              {title}
            </Link>
          </h3>
          <p className="cursor-default font-display text-sm">{publishedDate || isPublished}</p>
          <RichText data={description} className="py-xs rich-text" />
        </header>
        <Link
          href="/"
          className="group isolate inline-flex items-center font-display text-sm/4 lowercase underline transition duration-150 hover:text-primary-600"
        >
          Read more{' '}
          <MdOutlineArrowRightAlt className="transition duration-150 not-group-hover:opacity-0 group-hover:translate-x-3xs" />
        </Link>
      </article>
      <Link
        href="/"
        className="col-span-2 transition duration-300 peer-has-[h3_a:hover]:opacity-75 hover:opacity-75"
      >
        <BookCover {...coverImg} />
      </Link>
    </li>
  )
}

function BookCover({ alt, sizes }) {
  if (!sizes)
    return (
      <div className="grid aspect-[2/3] place-content-center bg-secondary-300 p-md text-center font-display text-2xl/16 font-bold text-accent-800 uppercase">
        <p>Coming soon</p>
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
      className="aspect-[2/3] object-cover"
    />
  )
}
