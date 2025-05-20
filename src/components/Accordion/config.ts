import { Block } from 'payload'

export const Accordion: Block = {
  slug: 'accordion',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'images',
    },
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'questions',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'q',
          label: 'Question',
          type: 'text',
        },
        {
          name: 'a',
          label: 'Answer',
          type: 'textarea',
        },
      ],
    },
  ],
}
