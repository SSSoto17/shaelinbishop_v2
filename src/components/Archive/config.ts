import { Block } from 'payload'

export const Archive: Block = {
  slug: 'archive',
  fields: [
    {
      type: 'select',
      name: 'filter',
      label: 'Filter by',
      options: [],
    },
    {
      type: 'relationship',
      name: 'content',
      relationTo: 'publicationCategories',
      hasMany: true,
      required: true,
      //   filterOptions: (siblingData) => {
      //     return {
      //       isPublished: { equals: siblingData },
      //     }
      //   },
    },
  ],
}
