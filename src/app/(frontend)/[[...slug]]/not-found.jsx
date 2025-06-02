import Link from 'next/link'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

export default function NotFound() {
  return (
    <main className="content-start">
      <section className="gap-y-xl py-2xl *:col-span-full">
        <header className="flow-space">
          <h2 className="font-accent text-2xl/12 font-black">Not Found</h2>
          <p>Could not find requested resource.</p>
        </header>
        <Link
          href="/"
          className="group flex items-center gap-xs font-display text-lg font-bold tracking-tight text-accent-800 uppercase"
        >
          Return Home
          <MdOutlineArrowRightAlt
            size={32}
            className="transition duration-150 group-hover:translate-x-2"
          />
        </Link>
      </section>
    </main>
  )
}
