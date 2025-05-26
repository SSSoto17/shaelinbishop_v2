import { RichText } from '../RichText'
import ContactForm from './index.client'

export default function Contact({ bgImg, info, formFields }) {
  const img = `url(${bgImg?.sizes?.screen?.url})`
  return (
    <section className="full-bleed" id="Contact">
      <div className="span-1/2 grid grid-cols-subgrid px-lg py-2xl">
        <article className="col-span-full col-start-2">
          <RichText
            data={info}
            className="flow-space [&_a]:underline [&_a]:transition [&_a]:duration-150 [&_a]:ease-in [&_a]:hover:text-primary-600 [&_h2]:text-lg"
          />
        </article>
      </div>
      <article
        style={{ backgroundImage: img }}
        className="span-1/2 grid grid-cols-subgrid bg-cover py-2xl"
      >
        <ContactForm data={formFields} />
      </article>
    </section>
  )
}
