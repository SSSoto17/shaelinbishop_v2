import { Block } from 'payload'

export const Featured: Block = {
  slug: 'featuredContent',
  fields: [
    {
      name: 'bgImg',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'images',
      hasMany: true,
      maxRows: 2,
    },
    {
      name: 'header',
      type: 'group',
      fields: [
        {
          name: 'tagline',
          type: 'text',
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'subtitle',
          type: 'text',
        },
      ],
    },
    {
      name: 'body',
      label: false,
      type: 'richText',
    },
    {
      name: 'featuredItems',
      type: 'relationship',
      hasMany: true,
      maxRows: 3,
      relationTo: 'publications',
    },
  ],
}
