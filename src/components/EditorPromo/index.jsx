import Image from 'next/image'

export default function EditorPromo({
  img: {
    alt,
    sizes: {
      large: { url, width, height },
    },
  },
}) {
  return (
    <section className="grid gap-lg">
      <article className="grid grid-cols-2 items-end gap-x-xl">
        {/* <h2 className="font-display text-2xl uppercase">Need help with your book?</h2> */}
        <h2 className="text-right font-display text-2xl/14 tracking-tight uppercase">
          Need help
          <br />
          with your <span className="text-3xl italic">book?</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam voluptate accusamus
          repellendus quidem hic officia qui enim laudantium in id!
        </p>
      </article>
      {/* <h2 className="text-right font-display text-3xl/28 uppercase">
          <span className="italic">Part</span> of
          <br />
          the <span className="text-4xl italic">solution</span>
        </h2> */}

      {url && (
        <Image src={url} alt={alt} width={width} height={height} className="w-full object-cover" />
      )}
      {/* <h2 className="grid grid-cols-3 text-2xl">
          <span className="text-3xl italic">Dreaming</span>
          <br />
          <span className="col-start-3 row-start-2 text-center font-display">in</span>
          <br />
          <span className="col-start-2 row-start-3 text-center text-4xl font-black">sepia.</span>
        </h2> */}
    </section>
  )
}
