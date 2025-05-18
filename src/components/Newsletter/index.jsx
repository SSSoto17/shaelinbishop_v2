import Form from 'next/form'

import { Button, Input } from '@headlessui/react'
import Image from 'next/image'

export default function RenderNewsletter({ heading, body, buttonLabel, img }) {
  const { alt, sizes } = img
  return (
    <section className="full-bleed border-y border-neutral-900">
      <article className="grid grid-cols-8 gap-x-xl border-x border-y-neutral-900 p-xl">
        <p className="col-span-4 text-right text-lg text-neutral-800">
          Want to stay updated on new releases?
        </p>
        <Image
          src={sizes?.card.url}
          alt={alt}
          width={sizes?.card.width}
          height={sizes?.card.height}
          className="col-span-3 col-start-6 row-span-3 row-start-1"
        />
        {/* <p className="col-span-4 col-start-1 row-start-4 text-right text-lg text-neutral-800">
          Want to stay updated on new releases?
        </p> */}
        {/* <h2 className="col-span-4 font-accent text-3xl text-balance">{heading}</h2> */}
        <div className="col-span-4 col-start-3 row-start-2">
          <h2 className="font-accent text-2xl text-balance">{heading}</h2>
          <p className="max-w-prose">{body}</p>
        </div>
        {/* <Form action="/" className="col-start-2 row-start-4 flex gap-xs"> */}
        <Form
          action="/"
          className="col-span-2 col-start-5 row-start-3 flex gap-xs self-center text-sm"
        >
          <Input
            name="email"
            type="email"
            placeholder="Enter email"
            className="max-w-64 border border-accent-600 bg-neutral-50 p-2xs"
          />
          <Button className="cursor-pointer bg-accent-900 px-xl py-xs font-accent text-neutral-50 uppercase transition-colors duration-150 hover:bg-accent-800 active:bg-accent-950">
            {buttonLabel}
          </Button>
        </Form>
      </article>
    </section>
  )
}
