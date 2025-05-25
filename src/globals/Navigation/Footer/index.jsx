import Link from 'next/link'
import { FaGoodreads, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'

export default function Footer() {
  const currentYear = new Date().toLocaleDateString('en-us', { year: 'numeric' })

  return (
    <footer className="full-bleed bg-primary-900 py-sm font-display text-sm text-primary-50">
      <nav className="flex justify-between">
        <ul className="flex gap-xs">
          <li>
            <Link
              href="/about#Contact"
              className="transition duration-150 ease-in not-hover:underline hover:text-primary-200"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link href="/about#FrequentlyAskedQuestions">FAQ</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
        </ul>
        <p className="cursor-default">Copyright {currentYear} &copy; Shaelin Bishop </p>
        <ul className="flex items-center gap-xs">
          <li>
            <Link href="https://www.goodreads.com/user/show/5803057-shaelin-b" target="_blank">
              <FaGoodreads />
            </Link>
          </li>
          <li>
            <Link href="https://x.com/shaelinbishop" target="_blank">
              <FaXTwitter />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/shaelinbishop" target="_blank">
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/channel/UCb-wzF6DrSslXq3qE61YL7A"
              target="_blank"
              aria-label="Shaelin Bishop's YouTube Channel"
              className="text-base transition duration-150 ease-in hover:text-primary-200"
            >
              <FaYoutube />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
