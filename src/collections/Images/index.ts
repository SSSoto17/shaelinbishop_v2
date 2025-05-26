import type { Field, GenerateImageName, ImageSize, UploadConfig } from 'payload'

// FIELDS
export const imgName: Field = {
  name: 'title',
  label: 'Name',
  type: 'text',
  required: true,
}

export const altText: Field = {
  name: 'alt',
  type: 'text',
  defaultValue: '',
}

// IMAGE SIZES
const autoName: GenerateImageName = ({ originalName, sizeName, width, height }) => {
  const formatted = originalName.toLowerCase().replaceAll(' ', '')
  return `${formatted}_${sizeName}-${height}x${width}.webp`
}

const imgSize: ImageSize = {
  name: 'imageSize',
  formatOptions: {
    format: 'webp',
  },
  generateImageName: autoName,
  fit: 'cover',
  position: 'centre',
}

const imgSizes = [
  {
    ...imgSize,
    name: 'thumbnail',
    width: 400,
    height: 300,
    withoutEnlargement: false,
  },
  {
    ...imgSize,
    name: 'small',
    width: 400,
    withoutEnlargement: false,
  },
  {
    ...imgSize,
    name: 'card',
    width: 648,
    height: 1024,
  },
  {
    ...imgSize,
    name: 'medium',
    width: 760,
  },
  {
    ...imgSize,
    name: 'large',
    width: 1100,
  },
  {
    ...imgSize,
    name: 'screen',
    width: 2048,
  },
]

// CONFIG
export const imgUpload: UploadConfig = {
  staticDir: '@/assets/img',
  adminThumbnail: 'thumbnail',
  filenameCompoundIndex: ['title'],
  mimeTypes: ['image/*'],
  formatOptions: { format: 'webp' },
  imageSizes: imgSizes,
  resizeOptions: {
    withoutEnlargement: true,
  },
}
