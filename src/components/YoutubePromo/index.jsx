import Link from 'next/link'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

export default function YouTubePromo() {
  return (
    <section className="grid grid-cols-subgrid py-xl">
      <article className="col-span-6 py-xl pr-md flow-space">
        <h2 className="text-2xl/16 font-black">
          <span className="block text-lg/8 font-bold tracking-tight">Check out</span>
          Shaelin Writes
        </h2>
        <p className="font-bold">
          Shaelin shares valuable advice and resources for aspiring writers on their YouTube
          channel.
        </p>
        <Link
          className="group inline-flex items-center gap-3xs py-3xs font-display font-bold uppercase transition duration-150 ease-in hover:text-primary-700"
          href="https://www.youtube.com/channel/UCb-wzF6DrSslXq3qE61YL7A"
        >
          Subscribe Now
          <MdOutlineKeyboardDoubleArrowRight className="transition duration-150 ease-in group-hover:animate-go" />
        </Link>
      </article>
      <figure className="col-span-6 content-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/51G4Nd4s6vQ?si=k75nxq9k4ma3qRj9&amp;controls=0"
          title="YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </figure>
    </section>
  )
}
