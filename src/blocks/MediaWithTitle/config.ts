import { Block } from 'payload'

export const MediaWithTitle: Block = {
  slug: 'mediaWTitle',
  labels: { singular: 'Media Block with Title', plural: 'Media Blocks with Title' },
  fields: [
    { name: 'images', type: 'upload', relationTo: 'images', hasMany: true },
    {
      name: 'tagline',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'link',
      type: 'text',
    },
  ],
}
