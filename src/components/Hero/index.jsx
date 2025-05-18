export default function RenderHero({ type, content }) {
  // const { type, image } = props
  const heroImg = `url(${content?.image?.url})`

  if (type !== 'none')
    return (
      <section
        style={{ backgroundImage: heroImg }}
        className="full-bleed bg-accent-500 bg-cover bg-fixed py-xl text-neutral-50 bg-blend-darken"
      >
        {type === 'highImpact' && <HighImpact {...content} />}
        {type === 'lowImpact' && <LowImpact {...content} />}
        {type === 'banner' && <Banner {...content} />}
      </section>
    )

  return null
}

// LARGE HERO
function HighImpact({ heading }) {
  return (
    <article className="h-224 max-h-screen place-content-center py-xs flow-space">
      <h1 className="font-accent text-4xl/26 font-extrabold tracking-tighter text-balance uppercase">
        {heading}
      </h1>
      <h2 className="text-lg font-extrabold">Nanum Myeongjo</h2>
      <p className="max-w-prose font-bold tracking-wide">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad vitae, voluptatibus repellendus
        enim, maiores vel animi neque id magni dolores adipisci accusantium cupiditate ipsa est,
        excepturi dolorum. Et, eligendi repellendus!
      </p>
    </article>
  )
}

// SMALL HERO
function LowImpact({ heading }) {
  return (
    <article className="justify-self-end">
      <h1 className="font-accent text-2xl font-extrabold tracking-tighter">{heading}</h1>
      <p className="max-w-prose tracking-wide">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores labore molestias provident
        voluptas earum, minus magni quas sapiente recusandae saepe doloribus cumque ratione
        inventore aut placeat expedita dolorum vitae. Optio?
      </p>
    </article>
  )
}

// BANNER
function Banner({ heading }) {
  return (
    <article>
      <h1 className="text-2xl font-black">{heading}</h1>
    </article>
  )
}
