import { Block } from 'payload'

export const TextColumns: Block = {
  slug: 'textColumns',
  fields: [
    {
      name: 'textColumns',
      type: 'array',
      labels: { singular: 'Column', plural: 'Columns' },
      maxRows: 4,
      fields: [
        {
          name: 'textColumn',
          label: false,
          type: 'richText',
        },
      ],
    },
    // hidden field that provides the column number and renders the appropriate Tailwind class
  ],
}
