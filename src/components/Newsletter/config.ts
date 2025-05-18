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
      admin: {
        placeholder:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima perferendis debitis veniam necessitatibus harum laudantium minus ea ad eius, eveniet dicta quaerat officiis, ut sunt corrupti nam quae quas possimus?',
      },
      name: 'body',
      type: 'textarea',
      defaultValue:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima perferendis debitis veniam necessitatibus harum laudantium minus ea ad eius, eveniet dicta quaerat officiis, ut sunt corrupti nam quae quas possimus?',
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
