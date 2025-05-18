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
      name: 'description',
      type: 'textarea',
    },
    {
      type: 'group',
      name: 'images',
      fields: [
        { name: 'imageGroup', type: 'upload', relationTo: 'images', hasMany: true },
        {
          name: 'imagesTitle',
          type: 'text',
        },
      ],
    },
    {
      name: 'imgTest',
      type: 'upload',
      relationTo: 'images',
    },
    {
      name: 'bgImg',
      type: 'upload',
      relationTo: 'images',
    },
  ],
}
