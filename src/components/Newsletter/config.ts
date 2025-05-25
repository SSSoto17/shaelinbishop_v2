import { Block } from 'payload'

export const Newsletter: Block = {
  slug: 'newsletter',
  fields: [
    {
      name: 'img',
      label: 'Image',
      type: 'upload',
      relationTo: 'images',
    },
    {
      admin: {
        placeholder: 'Sign up for our newsletter',
      },
      name: 'heading',
      type: 'text',
      defaultValue: 'Sign up for our newsletter',
    },
    {
      name: 'body',
      type: 'richText',
    },
    {
      admin: {
        placeholder: 'Subscribe',
      },
      name: 'buttonLabel',
      type: 'text',
      defaultValue: 'Subscribe',
    },
  ],
}

// Sign up for the newsletter
// Sign up to hear about upcoming releases, events, and what’s happening behind the scenes. You’ll also receive occasional resources and writing insights, crafted with fellow writers in mind.
