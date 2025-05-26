'use client'

import { useRouter } from 'next/navigation'

export default function Logo() {
  const router = useRouter()
  return (
    <p
      className="cursor-pointer justify-self-start font-logo tracking-wider uppercase hover:opacity-60"
      onClick={() => router.push('/')}
    >
      Shaelin Bishop
    </p>
    // <Link
    //   href="/"
    //   className="justify-self-start font-logo tracking-wider uppercase hover:opacity-60"
    // >
    // </Link>
  )
}
