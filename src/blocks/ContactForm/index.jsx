import ParallaxBG from '@/components/ParallaxBG'
import { RichText } from '../../components/RichText'
import ContactForm from './index.client'

export default function Contact({ bgImg, info, formFields }) {
  // const img = `url(${bgImg?.sizes?.screen?.url})`
  return (
    <section data-fullbleed="true" id="Contact">
      <article className="@container place-content-center place-items-center py-md md:col-span-6 lg:col-span-7 lg:py-2xl">
        <RichText
          data={info}
          className="col-span-full flow-space *:max-w-108 md:col-start-2 md:-col-end-2 [&_a]:underline [&_a]:transition [&_a]:duration-150 [&_a]:ease-in [&_a]:hover:text-primary-600 [&_h2]:text-lg"
        />
      </article>
      <ParallaxBG fullBleed={true} {...bgImg} className="py-2xl md:col-span-8 lg:col-span-7">
        <ContactForm data={formFields} />
      </ParallaxBG>
    </section>
  )
}
