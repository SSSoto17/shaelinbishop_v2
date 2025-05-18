import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  admin: {
    group: 'Navigation',
  },
  access: { read: () => true },
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      maxRows: 5,
      fields: [
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
        },
      ],
    },
  ],
}
