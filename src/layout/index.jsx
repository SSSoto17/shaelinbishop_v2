import { RichText } from '@/components/RichText'
import Image from 'next/image'
import { getBleed } from './utils'

function generateStyles(fullBleed, flex, bg, padding) {
  return `${padding} ${fullBleed} ${flex} ${bg}`
}

function LayoutBlock({
  blockType,
  gap: { separateGap, gapSize, inlineGapSize, blockGapSize },
  background: { type, sectionWidth },
  padding: { type: paddingType, size },
  components,
}) {
  // Option for padding amount
  const padding = `${paddingType}-${size}`
  // Option for "flex-flow" or "grid-flow"
  const flex = blockType === 'flex' ? blockType : ''
  // Option for full-bleed
  const fullBleed = getBleed(sectionWidth === 'Full')
  // Option for background image or color
  const bg = type === 'clr' ? 'bg-accent-400' : ''
  // Options for col-span on children at different screen sizes
  // const sectionGap = {
  //   gap: gapSize !== 'none' && 'gap-' + gapSize,
  //   blockGap: '',
  //   inlineGap: '',
  // }
  // console.log(gapSize)
  const gap = separateGap
    ? `${inlineGapSize !== 'none' ? inlineGapSize : ''} ${blockGapSize !== 'none' ? blockGapSize : ''}`
    : gapSize

  const sectioning = {
    colSpanFull: 'col-[content]',
    colSpan10:
      'group-data-[fullbleed="true"]:nth-[3n+1]:col-start-[content] group-data-[fullbleed="true"]:nth-[3n+3]:col-end-[content] sm:col-span-10',
    colSpan9:
      'group-data-[fullbleed="true"]:nth-[3n+1]:col-start-[content] group-data-[fullbleed="true"]:nth-[3n+3]:col-end-[content] sm:col-span-9',
    colSpan8:
      'group-data-[fullbleed="true"]:nth-[3n+1]:col-start-[content] group-data-[fullbleed="true"]:nth-[3n+3]:col-end-[content] sm:col-span-8',
    colSpan6:
      'group-data-[fullbleed="true"]:nth-[odd]:col-start-[content] group-data-[fullbleed="true"]:nth-[even]:col-end-[content] sm:col-span-6',
    colSpan4:
      'group-data-[fullbleed="true"]:nth-[3n+1]:col-start-[content] group-data-[fullbleed="true"]:nth-[3n+3]:col-end-[content] sm:col-span-4',
    colSpan3:
      'group-data-[fullbleed="true"]:nth-[4n+1]:col-start-[content] group-data-[fullbleed="true"]:nth-[4n+4]:col-end-[content] sm:col-span-3',
    colSpan2:
      'group-data-[fullbleed="true"]:nth-[6n+1]:col-start-[content] group-data-[fullbleed="true"]:nth-[6n+6]:col-end-[content] sm:col-span-2',
  }

  const style = `${paddingType !== 'none' && padding} ${flex} ${bg} ${gap}`

  return (
    <section data-fullbleed={sectionWidth === 'Full'} className={`group ${style}`}>
      {components.map((item, id) => {
        if (item.blockType === 'image') {
          if (!item.image)
            return (
              <ImagePlaceholder
                key={id}
                position={sectioning[item.position]}
                rows={item.rows}
                padding={
                  item.padding.type !== 'none' && `${item.padding.type}-${item.padding.size}`
                }
              />
            )

          const {
            image: { url, width, height, alt },
            padding: { type, size },
            position,
            rows,
            aspectRatio,
            imagePosition,
          } = item

          return (
            <Image
              key={id}
              src={url}
              width={width}
              height={height}
              alt={alt}
              className={`${sectioning[position]} ${aspectRatio} ${imagePosition} self-stretch object-cover ${rows} ${type !== 'none' && `${type}-${size}`}`}
            />
          )
        }
        if (item.blockType === 'richText') {
          const {
            body,
            padding: { type, size },
            position,
          } = item
          return (
            <RichText
              key={id}
              data={body}
              className={`${type !== 'none' && `${type}-${size}`} ${sectioning[position]}`}
            />
          )
        }
      })}
    </section>
  )
}

function ImagePlaceholder({ position, padding }) {
  console.log(padding)
  const style = `grid place-items-center self-stretch bg-secondary-200 font-display text-sm font-bold uppercase ${position} ${padding && padding}`
  return (
    <div className={style}>
      <p className="cursor-default p-sm">Choose image</p>
    </div>
  )
}

function RenderContent({ layoutSections: blocks }) {
  return blocks.map((section, id) => {
    // console.log(section)
    return <LayoutBlock key={id} {...section} />
  })
}

export { RenderContent as TestContent }
