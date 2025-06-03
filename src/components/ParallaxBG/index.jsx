import Image from 'next/image'

export default function ParallaxBG({ url, alt, isPriority, className, children }) {
  console.log(className)
  return (
    <section className={`${className} clip-path`}>
      <div className="fixed top-0 right-0 bottom-0 left-0 -z-10 col-span-full">
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
