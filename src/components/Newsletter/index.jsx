import Image from 'next/image'
import { RichText } from '../RichText'
import ActionForm from './index.client'

export default function RenderNewsletter({
  heading,
  body,
  buttonLabel,
  img: {
    alt,
    sizes: {
      card: { url, width, height },
    },
  },
}) {
  return (
    <section className="full-bleed border-y border-primary-900">
      <article className="gap-x-xl gap-y-sm border-primary-900 py-xl *:col-span-full sm:grid-cols-8 sm:border-x sm:p-xl">
        <p className="hidden text-primary-800 sm:block md:text-lg lg:col-span-4 lg:text-right">
          Want to stay updated on new releases?
        </p>
        <Image
          src={url}
          alt={alt}
          width={width}
          height={height}
          className="hidden self-stretch object-cover lg:col-span-3 lg:-col-end-1 lg:row-span-3 lg:row-start-1 lg:block"
        />
        <div className="flow-space lg:col-span-4 lg:col-start-3 lg:row-start-2">
          <h2 className="font-display text-2xl/12 text-balance lg:leading-16">{heading}</h2>
          <RichText data={body} className="max-w-prose" />
        </div>
        <ActionForm label={buttonLabel} />
      </article>
    </section>
  )
}

function OldNewsletterExperimentation({ heading, body, buttonLabel, img }) {
  const {
    alt,
    sizes: {
      card: { url, width, height },
    },
  } = img

  return (
    <section className="full-bleed border-y border-primary-900">
      <article className="grid-cols-8 gap-x-xl gap-y-sm border-x border-y-primary-900 p-xl">
        <p className="col-span-4 text-right text-lg text-primary-800">
          Want to stay updated on new releases?
        </p>
        <Image
          src={url}
          alt={alt}
          width={width}
          height={height}
          className="col-span-3 col-start-6 row-span-3 row-start-1 self-stretch object-cover"
        />
        {/* <p className="col-span-4 col-start-1 row-start-4 text-right text-lg text-primary-800">
          Want to stay updated on new releases?
        </p> */}
        {/* <h2 className="col-span-4 font-display text-3xl text-balance">{heading}</h2> */}
        <div className="col-span-4 col-start-3 row-start-2 flow-space">
          <h2 className="font-display text-2xl/16 text-balance">{heading}</h2>
          <RichText data={body} className="max-w-prose" />
        </div>
        {/* <Form action="/" className="col-start-2 row-start-4 flex gap-xs"> */}
        <ActionForm label={buttonLabel} />
        {/* <Form
          action={mockValidateForm}
          className="col-start-5 -col-end-1 row-span-2 row-start-3 grid grid-cols-5 gap-xs self-center px-2xs text-sm"
        >
          <Input
            name="email"
            type="email"
            placeholder="Enter email"
            invalid={checkInvalid}
            className="col-span-3 border border-accent-600 bg-primary-50 px-2xs font-logo text-primary-800 placeholder:tracking-wide data-focus:outline-2 data-focus:outline-accent-700 data-invalid:border-2 data-invalid:border-error-600"
          />
          <Button
            type="submit"
            className="col-span-2 grid cursor-pointer place-content-center bg-accent-900 p-2xs font-display text-primary-50 uppercase transition-colors duration-150 hover:bg-accent-800 active:bg-accent-950"
          >
            {buttonLabel}
          </Button>
        </Form> */}
      </article>
    </section>
  )
}
