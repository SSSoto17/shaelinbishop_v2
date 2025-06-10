import Image from 'next/image'

export default function ComponentImage({
  image,
  spacing: {
    margin: { value: margin },
    padding: { value: padding },
  },
  gridPosition,
  aspectRatio,
  imagePosition,
}) {
  let layoutStyle
  if (gridPosition) {
    const { columns, rows } = gridPosition
    layoutStyle = `${columns || ''} ${rows || ''}`
  }

  if (!image)
    return <ImagePlaceholder classes={`${layoutStyle} ${padding} ${margin} ${aspectRatio}`} />
  const { url, width, height, alt } = image

  return (
    <Image
      src={url}
      width={width}
      height={height}
      alt={alt}
      className={`${layoutStyle} ${aspectRatio} ${imagePosition} ${padding} ${margin} self-stretch object-cover`}
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
