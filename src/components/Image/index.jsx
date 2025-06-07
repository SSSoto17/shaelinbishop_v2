import Image from 'next/image'

export default function ComponentImage({
  image,
  position,
  rows,
  padding,
  aspectRatio,
  imagePosition,
}) {
  if (!image) return <ImagePlaceholder classes={`${position} ${rows} ${padding} ${aspectRatio}`} />
  const { url, width, height, alt } = image

  return (
    <Image
      src={url}
      width={width}
      height={height}
      alt={alt}
      className={`col-auto ${position} ${rows} ${aspectRatio} ${imagePosition} ${padding} self-stretch object-cover`}
    />
  )
}

function ImagePlaceholder({ classes }) {
  return (
    <div
      className={`col-auto grid place-items-center self-stretch bg-secondary-200 font-display text-sm font-bold uppercase ${classes}`}
    >
      <p className="cursor-default p-sm">Choose image</p>
    </div>
  )
}
