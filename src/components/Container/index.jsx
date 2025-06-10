import ComponentImage from '../Image'
import ParallaxBG from '../ParallaxBG'
import { RichText } from '../RichText'
import { getBackground, getBorder, getLayout } from './styles'

export default function Container({
  general: {
    sectionWidth,
    as,
    spacing: {
      padding: { value: padding },
      margin: { value: margin },
    },
  },
  background: {
    background,
    bgImg,
    border: { sides },
  },
  layout,
  components,
}) {
  const layoutStyle = getLayout(layout)
  const backgroundStyle = getBackground(background)
  const borderStyle = getBorder(sides)

  let style
  let childStyle
  if (sectionWidth === 'Content') {
    style = `${padding} ${margin} ${layoutStyle} ${backgroundStyle} ${borderStyle}`
  } else {
    style = `grid-cols-subgrid ${backgroundStyle} ${margin} ${borderStyle}`
    childStyle = `${padding} ${layoutStyle} col-start-2 -col-end-2`
  }

  if (background === 'bgImg') {
    return (
      <ParallaxBG fullBleed={sectionWidth === 'Full'} {...bgImg} className={style} as={as}>
        <RenderComponents
          isFullBleed={sectionWidth === 'Full'}
          style={childStyle}
          content={components}
        />
      </ParallaxBG>
    )
  }

  if (as === 'section')
    return (
      <section
        className={style}
        {...(sectionWidth === 'Full' && { 'data-fullbleed': sectionWidth === 'Full' })}
      >
        <RenderComponents
          isFullBleed={sectionWidth === 'Full'}
          style={childStyle}
          content={components}
        />
      </section>
    )

  if (as === 'article')
    return (
      <article>
        <RenderComponents
          isFullBleed={sectionWidth === 'Full'}
          style={childStyle}
          content={components}
        />
      </article>
    )

  return (
    <div
      className={style}
      {...(sectionWidth === 'Full' && { 'data-fullbleed': sectionWidth === 'Full' })}
    >
      <RenderComponents
        isFullBleed={sectionWidth === 'Full'}
        style={childStyle}
        content={components}
      />
    </div>
  )
}

function RenderComponents({ isFullBleed, style, content }) {
  if (isFullBleed)
    return (
      <div className={style}>
        {content.map((item, id) => {
          const { blockType } = item
          // console.log(item)
          if (blockType === 'image') return <ComponentImage key={id} {...item} />
          if (blockType === 'richText') return <RichText key={id} {...item} />
        })}
      </div>
    )

  return content.map((item, id) => {
    const { blockType } = item
    console.log(item)

    if (blockType === 'image') return <ComponentImage key={id} {...item} />
    if (blockType === 'richText') return <RichText key={id} {...item} />
  })
}
