import { payload } from '@/lib/utils'
import Link from 'next/link'
import { FaGoodreads, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'

export default async function Footer() {
  const { navigation } = await payload.findGlobal({
    slug: 'footer',
    pagination: false,
  })

  return (
    <footer className="full-bleed bg-primary-900 py-sm font-display text-sm text-primary-50">
      <nav className="flex justify-between">
        {navigation.map(({ blockType, items }, id) => {
          if (blockType === 'copyright') return <Copyright key={id} />
          if (blockType === 'linkArray') return <NavBar key={id} data={items} />
        })}
      </nav>
    </footer>
  )
}

function NavBar({ data }) {
  return (
    <ul className="flex items-center gap-xs">
      {data.map(({ label, link }, id) => {
        return <NavLink key={id} {...label} {...link} />
      })}
    </ul>
  )
}

function NavLink({
  label,
  displayLabel,
  ariaLabel,
  URL,
  targetType,
  internalLink: { targetPage, targetSection },
}) {
  const internalURL = targetPage?.slug + (targetSection ? targetSection : '')
  return (
    <li>
      <Link
        href={URL || internalURL}
        target={targetType}
        aria-label={ariaLabel}
        className={`${!displayLabel && 'not-hover:underline'} transition duration-150 ease-in hover:text-primary-200`}
      >
        {!displayLabel && label}
        {displayLabel && label === 'Goodreads' && <FaGoodreads />}
        {displayLabel && label === 'Twitter / X' && <FaXTwitter />}
        {displayLabel && label === 'Instagram' && <FaInstagram />}
        {displayLabel && label === 'YouTube' && <FaYoutube className="text-base" />}
      </Link>
    </li>
  )
}

function Copyright() {
  const currentYear = new Date().toLocaleDateString('en-us', { year: 'numeric' })
  return <p className="cursor-default">Copyright {currentYear} &copy; Shaelin Bishop </p>
}
