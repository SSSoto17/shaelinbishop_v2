import Image from 'next/image'

export default function AuthorBio({ headshot, headline, description, images, imgTest, bgImg }) {
  const { alt, sizes } = headshot

  return (
    <>
      <section className="grid gap-x-md-lg gap-y-xl py-xl-2xl sm:grid-cols-2 lg:grid-cols-5">
        <Image
          src={sizes.card.url}
          alt={alt}
          width={sizes.card.width}
          height={sizes.card.height}
          className="object-cover sm:order-2 lg:col-span-2"
        />
        <article className="grid content-center flow-space lg:col-span-3">
          <h2 className="text-3xl/22 font-black">{headline}</h2>
          <p className="max-w-prose text-pretty">{description}</p>
        </article>
      </section>
      <MediaWithTitle {...images} />
      <TextColumns />
      <section className="grid gap-lg">
        <h2 className="text-right font-display text-3xl/28 uppercase">
          <span className="italic">Part</span> of
          <br />
          the <span className="text-4xl italic">solution</span>
        </h2>
        <Image
          src={imgTest?.sizes.screen.url}
          alt="testing"
          width={imgTest?.sizes.screen.width}
          height={imgTest?.sizes.screen.height}
        />
      </section>
      <section className="py-2xl">
        <h2 className="grid grid-cols-3 text-2xl">
          <span className="text-3xl italic">Dreaming</span>
          <br />
          <span className="col-start-3 row-start-2 text-center font-display">in</span>
          <br />
          <span className="col-start-2 row-start-3 text-center text-4xl font-black">sepia.</span>
        </h2>
      </section>
      <ImginImg {...bgImg} />
      <section className="full-bleed">
        <article className="subgrid span-1/2 grid py-2xl">
          <div className="col-span-6 col-start-4 background-primary p-md drop-shadow-md">
            <h2>Check out Shaelin's YouTube</h2>
          </div>
        </article>
        <div className="span-1/2 bg-accent-600" />
      </section>
      <ParallaxScroll {...bgImg} />
    </>
  )
}

function MediaWithTitle({ imageGroup, imagesTitle }) {
  return (
    <section className="grid grid-cols-3 gap-x-md-lg gap-y-sm py-lg">
      <Image
        src={imageGroup?.[0].sizes.card.url}
        alt={imageGroup?.[0].alt}
        width={imageGroup?.[0].sizes.card.width}
        height={imageGroup?.[0].sizes.card.height}
        className="row-span-2 self-stretch object-cover"
      />
      <Image
        src={imageGroup?.[1].sizes.card.url}
        alt={imageGroup?.[1].alt}
        width={imageGroup?.[1].sizes.card.width}
        height={imageGroup?.[1].sizes.card.height}
        className="aspect-square self-stretch object-cover"
      />
      <h2 className="col-span-2 self-center text-3xl font-bold text-balance">{imagesTitle}</h2>
    </section>
  )
}

function TextColumns() {
  return (
    <section className="grid grid-cols-2 gap-x-md-lg py-md">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates molestiae
        voluptas repellat doloribus. Voluptate pariatur minima quod saepe? Consectetur provident
        labore aliquid, assumenda quas quis error molestias ex impedit!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque reiciendis nam repudiandae
        soluta facilis.
      </p>
    </section>
  )
}

function ParallaxScroll({ sizes, alt }) {
  const img = `url(${sizes?.screen.url})`

  return (
    <section
      style={{ backgroundImage: img }}
      className="relative -z-10 full-bleed min-h-screen bg-cover bg-fixed py-4xl text-primary-50"
    >
      <article className="absolute inset-0 full-bleed backdrop-blur-md" />
      <article
        style={{ backgroundImage: img }}
        className="absolute top-50 bottom-50 z-0 w-120 border border-primary-50 bg-right"
      />
      <h2 className="z-10 place-self-end font-display text-2xl">Scrolling...</h2>
      {/* <Image
        src={sizes?.screen.url}
        alt={alt}
        width={sizes?.screen.width}
        height={sizes?.screen.height}
        className="absolute inset-0 z-10 full-bleed h-screen object-cover"
      /> */}
    </section>
  )
}

function ImginImg({ sizes, alt }) {
  const img = `url(${sizes?.screen.url})`

  return (
    <section
      style={{ backgroundImage: img }}
      className="relative -z-10 full-bleed min-h-screen place-content-center gap-y-lg bg-cover bg-fixed py-3xl text-primary-50"
    >
      <article className="absolute inset-0 -z-10 full-bleed backdrop-blur-md" />
      {/* <article className="row-span-3 w-50 border border-primary-50 backdrop-blur-3xl" /> */}
      <h2 className="justify-self-end font-display text-2xl">Scrolling...</h2>
      <Image
        src={sizes?.screen.url}
        alt={alt}
        width={sizes?.screen.width}
        height={sizes?.screen.height}
        className="border border-primary-50"
      />
    </section>
  )
}
