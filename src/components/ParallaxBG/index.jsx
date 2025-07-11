import Image from 'next/image'

export default function ParallaxBG({ url, alt, isPriority, fullBleed, className, as, children }) {
  if (as === 'article')
    return (
      <article
        {...(fullBleed && { 'data-fullbleed': fullBleed })}
        className={`${className} clip-path`}
      >
        <div className="fixed inset-0 -z-10 col-span-full">
          <Image
            src={url}
            alt={alt}
            priority={!!isPriority}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {children}
      </article>
    )

  return (
    <section
      {...(fullBleed && { 'data-fullbleed': fullBleed })}
      className={`${className} clip-path`}
    >
      <div className="fixed inset-0 -z-10 col-span-full">
        <Image
          src={url}
          alt={alt}
          priority={!!isPriority}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {children}
    </section>
  )
}
