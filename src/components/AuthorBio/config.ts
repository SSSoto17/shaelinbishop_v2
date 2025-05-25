import { Block } from 'payload'

export const AuthorBio: Block = {
  slug: 'bio',
  fields: [
    {
      name: 'headshot',
      type: 'upload',
      relationTo: 'images',
    },
    {
      name: 'headline',
      type: 'text',
    },
    {
      name: 'body',
      label: false,
      type: 'richText',
    },
  ],
}
