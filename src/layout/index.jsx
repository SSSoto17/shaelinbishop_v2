import Container from '@/components/Container'
import ComponentImage from '@/components/Image'
import { RichText } from '@/components/RichText'
import { getBleed } from './utils'

// function generateStyles(fullBleed, flex, bg, padding) {
//   return `${padding} ${fullBleed} ${flex} ${bg}`
// }

function getStyles(mobile, tablet, desktop) {
  const style = (device) => {
    const {
      layout: { flexDirection, isReversed, isWrapped },
      padding,
    } = device
    return {
      layout: {
        flexDirection: ``,
        isReversed,
        isWrapped,
      },
      padding: {
        type: device.padding.type,
        size: device.padding.size,
      },
    }
  }

  // const mobile = {
  //   layout: '',
  //   background: '',
  //   margin: '',
  //   padding: {
  //     type: mobile,
  //     size,
  //   },
  // }
}

function LayoutBlock({
  blockType,
  mobile,
  tablet,
  desktop: {
    layout: {
      flexDirection,
      isReversed,
      isWrapped,
      gap: { separateGap, gapSize, inlineGapSize, blockGapSize },
    },
  },
  sections,
  background: { type, sectionWidth },
  padding: { type: paddingType, size },
  components,
}) {
  // RESPONSIVITY

  const data = getStyles(mobile, tablet, desktop)

  // Option for padding amount
  const padding = `${paddingType}-${size}`
  // Option for "flex-flow" or "grid-flow"
  const flex = blockType === 'flex' ? blockType : ''
  const layout = {
    grid: {
      colFull: 'grid grid-cols-1 col-[content] data-[fullbleed]:col-[full-bleed]',
      col2: 'grid grid-cols-2 data-[fullbleed]:col-[full-bleed]',
      col3: '',
      col4: '',
      col6: '',
    },
    flex: {
      flexRow: `flex ${isReversed ? 'flex-row-reverse' : 'flex-row'} ${isWrapped ? 'flex-wrap' : 'flex-nowrap'}`,
      flexCol: `flex ${isReversed ? 'flex-col-reverse' : 'flex-col'} ${isWrapped ? 'flex-wrap' : 'flex-nowrap'}`,
    },
  }

  console.log(layout[blockType][flexDirection])
  // Option for full-bleed
  const fullBleed = getBleed(sectionWidth === 'Full')
  // Option for background image or color
  const bg = type === 'clr' ? 'bg-accent-400' : ''
  // Options for col-span on children at different screen sizes
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

  const style = `${paddingType !== 'none' && padding} ${layout[blockType][flexDirection]} ${bg} ${gap}`
  // const style = `${paddingType !== 'none' && padding} ${flex} ${bg} ${gap}`

  return (
    <section
      {...(sectionWidth === 'Full' && { 'data-fullbleed': sectionWidth === 'Full' })}
      className={`group ${style}`}
    >
      {components.map((item, id) => {
        if (item.blockType === 'image') {
          const style = {
            position: sectioning[item.position],
            rows: item.rows,
            padding: item.padding.type !== 'none' && `${item.padding.type}-${item.padding.size}`,
            aspectRatio: item.aspectRatio,
            imagePosition: item.imagePosition,
          }
          return <ComponentImage key={id} {...item} {...style} />
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
              {...item}
              data={body}
              className={`${type !== 'none' && `${type}-${size}`}`}
              // className={`${type !== 'none' && `${type}-${size}`} ${sectioning[position]}`}
            />
          )
        }
      })}
    </section>
  )
}

function RenderContent({ layoutSections: blocks }) {
  return blocks.map((section, id) => {
    // console.log(section)
    return <Container key={id} {...section} />
    return <LayoutBlock key={id} {...section} />
  })
}

export { RenderContent as TestContent }
