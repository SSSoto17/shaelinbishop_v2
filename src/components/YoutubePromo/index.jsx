import Link from 'next/link'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

export default function YouTubePromo() {
  return (
    <section className="gap-y-sm py-xl *:col-span-full lg:*:col-span-6">
      <h2 className="text-2xl leading-tight font-black">
        <span className="block text-lg font-bold tracking-tight">Check out</span>
        Shaelin Writes
      </h2>
      <figure className="content-center lg:row-span-2">
        <iframe
          src="https://www.youtube.com/embed/51G4Nd4s6vQ?si=k75nxq9k4ma3qRj9&amp;controls=0"
          title="YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="aspect-video w-full"
        />
      </figure>
      <article className="flow-space lg:pr-md">
        <p className="font-bold">
          Shaelin shares valuable advice and resources for aspiring writers on their YouTube
          channel.
        </p>
        <Link
          className="group inline-flex items-center gap-3xs py-3xs font-display font-bold uppercase transition duration-150 ease-in hover:text-primary-700"
          href="https://www.youtube.com/channel/UCb-wzF6DrSslXq3qE61YL7A"
          target="_blank"
        >
          Subscribe Now
          <MdOutlineKeyboardDoubleArrowRight className="transition duration-150 ease-in group-hover:animate-go" />
        </Link>
      </article>
    </section>
  )
}
