export function getLayout(layout) {
  let layoutStyle

  if (layout.type) {
    const { type, gap, inlineGap, blockGap, separateGap } = layout
    layoutStyle = `${type} ${!separateGap ? gap || '' : `${inlineGap || ''} ${blockGap || ''}`}`

    if (type === 'flex') {
      const { flexDirection, isReversed, isWrapped } = layout
      layoutStyle = `${layoutStyle} ${flexDirection || 'flex-row'}${isReversed ? '-reverse' : ''} ${isWrapped ? 'flex-wrap' : ''}`
    }

    if (type === 'grid') {
      const { gridColumns, gridRows } = layout
      layoutStyle = `${layoutStyle} ${gridColumns || 'grid-cols-none'} ${gridRows || 'grid-rows-none'}`
    }
  } else {
    layoutStyle = 'block'
  }

  return layoutStyle
}

export function getBackground(bg) {
  let style
  if (bg === 'bgClr') {
    style = `bg-accent-400`
  } else {
    style = ''
  }

  return style
}

export function getBorder(sides) {
  let style = sides.length ? sides.join(' ') : ''

  if (sides.includes('border-t') && sides.includes('border-b')) {
    style = `border-y ${sides.filter((side) => side !== 'border-t' && side !== 'border-b').join(' ')}`
  }

  if (sides.includes('border-l') && sides.includes('border-r')) {
    style = `border-x ${sides.filter((side) => side !== 'border-l' && side !== 'border-r').join(' ')}`
  }

  if (sides.length === 4) {
    style = 'border'
  }

  return style
}
