'use client'

import { useState } from 'react'

export function FAQ({
  image: {
    alt,
    sizes: {
      medium: { url, width, height },
    },
  },
  heading,
  questions: qs,
}) {
  const [isActive, setIsActive] = useState(qs[0].a)
  return (
    <section className="full-bleed gap-2xl border-y border-y-primary-700">
      <article className="span-1/3 grid grid-cols-subgrid content-start gap-y-lg border-r border-r-primary-700 py-2xl">
        <h2 className="col-span-full col-start-2 font-bold">{heading}</h2>
        <ul className="span-1/3 col-span-full grid gap-xs text-right font-display lowercase">
          {qs.map((q, id) => {
            return (
              <li
                key={id}
                className={`px-2xl py-2xs ${isActive === q.a ? 'bg-accent-700 text-accent-50 hover:bg-accent-500' : 'bg-accent-200 hover:bg-accent-300 active:text-accent-50'} cursor-pointer text-sm transition duration-150 active:bg-accent-700`}
                onClick={() => setIsActive(q.a)}
              >
                {q.q}
              </li>
            )
          })}
        </ul>
      </article>
      <article className="span-2/3 grid grid-cols-subgrid content-center">
        <p
          className={`transition duration-300 ${!isActive && 'opacity-0'} col-span-full -col-end-2`}
        >
          {isActive}
        </p>
      </article>
    </section>
  )
}
