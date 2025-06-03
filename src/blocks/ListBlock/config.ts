import { Block, Field } from 'payload'

// header
const Header: Field = {
  name: 'header',
  type: 'group',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'subtitle',
      type: 'text',
    },
  ],
}

// body
const Body: Field = {
  name: 'body',
  label: false,
  type: 'richText',
}

// listitem type
const ListItem: Field = {
  name: 'itemType',
  type: 'select',
  options: [
    'Card',
    'Button',
  ],
}

// listitem -> title, rate, description
const ListCard: Field = {
  name: 'listCard',
  label: false,
  type: 'group',
  admin: {
    condition: (data, { itemType }) => {
      return itemType === 'Card'
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'rate',
      type: 'text',
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'note',
      type: 'richText',
    },
  ],
}

// listitem -> link button
const ListButton: Field = {
  name: 'listButton',
  label: false,
  type: 'group',
  admin: {
    condition: (data, { itemType }) => {
      return itemType === 'Button'
    },
  },
  fields: [
    {
      name: 'body',
      label: false,
      type: 'richText',
    },
    {
      name: 'label',
      type: 'text',
    },
    {
      name: 'linkType',
      type: 'select',
      options: [
        'Internal',
        'External',
      ],
    },
    {
      name: 'internalLink',
      label: false,
      type: 'group',
      admin: {
        condition: (data, { linkType }) => {
          return linkType === 'Internal'
        },
      },
      fields: [
        {
          name: 'targetPage',
          type: 'relationship',
          relationTo: 'pages',
        },
        {
          name: 'targetSection',
          type: 'text',
        },
      ],
    },
    {
      name: 'externalLink',
      label: false,
      type: 'group',
      admin: {
        condition: (data, { linkType }) => {
          return linkType === 'External'
        },
      },
      fields: [
        {
          name: 'url',
          type: 'text',
        },
        {
          name: 'targetType',
          label: 'Behavior',
          type: 'select',
          defaultValue: '_self',
          options: [
            {
              label: 'Default',
              value: '_self',
            },
            {
              label: 'Open in new tab',
              value: '_blank',
            },
          ],
        },
      ],
    },
  ],
}

// listarray
const List: Field = {
  name: 'list',
  type: 'array',
  maxRows: 10,
  fields: [
    ListItem,
    ListCard,
    ListButton,
  ],
}

export const ListBlock: Block = {
  slug: 'listBlock',
  fields: [
    Header,
    Body,
    List,
  ],
}
