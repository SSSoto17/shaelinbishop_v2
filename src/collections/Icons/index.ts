import { Field, UploadConfig } from 'payload'

export const iconName: Field = {
  name: 'title',
  label: 'Name',
  type: 'text',
  required: true,
}

// CONFIG
export const iconUpload: UploadConfig = {
  staticDir: '@/assets/icons',
  filenameCompoundIndex: ['title'],
  mimeTypes: ['image/svg'],
  crop: false,
}
