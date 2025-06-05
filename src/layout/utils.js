// SIZING UTILITY
// const sizes = {
//   subtle: 'xs',
//   small: 'sm',
//   medium: 'md',
//   large: 'lg',
//   dramatic: 'xl',
// }

// PADDING
export const getPadding = (type, size) => {
  //   const padding = {
  //     box: `${-${size}`,
  //     block: `py-${sizes[size]}`,
  //     inline: {},
  //   }

  return `${type}-${size}`
}

// FULL BLEED
export const getBleed = (isFullBleed) => {
  if (isFullBleed) {
    return 'col-span-full *:col-start-2 *:-col-end-2'
  } else {
    return '*:col-span-full'
  }
}
