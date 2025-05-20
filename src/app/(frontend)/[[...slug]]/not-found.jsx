import Link from 'next/link'

export default function NotFound() {
  return (
    <main>
      <h2 className="font-accent text-2xl font-black">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="font-accent text-lg font-bold tracking-tight text-accent-800 uppercase"
      >
        Return Home
      </Link>
    </main>
  )
}
