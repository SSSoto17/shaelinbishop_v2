import { YouTubeEmbed } from '@next/third-parties/google'
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
        <YouTubeEmbed videoid="51G4Nd4s6vQ" params="controls=0" style="aspect-video w-full" />
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
