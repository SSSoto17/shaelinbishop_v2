import Image from 'next/image'

export default function ParallaxBG({ url, alt, isPriority, className, children }) {
  return (
    <section className={`${className} clip-path`}>
      <div className="fixed inset-0 -z-10 col-span-full">
        <Image
          src={url}
          alt={alt}
          priority={isPriority}
          fill
          sizes="100svw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      {children}
    </section>
  )
}
