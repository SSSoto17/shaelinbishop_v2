import { Block } from 'payload'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  fields: [
    {
      type: 'upload',
      relationTo: 'images',
      name: 'image',
    },
    {
      type: 'text',
      name: 'tagline',
    },
    {
      type: 'text',
      name: 'heading',
    },
    {
      type: 'richText',
      name: 'description',
    },
  ],
}
