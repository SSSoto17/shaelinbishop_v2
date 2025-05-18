import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'role'],
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      type: 'row',
      fields: [
        {
          type: 'text',
          name: 'firstName',
          label: 'First Name',
        },
        {
          type: 'text',
          name: 'lastName',
          label: 'Last Name',
        },
      ],
    },
    {
      type: 'select',
      name: 'role',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
        {
          label: 'Guest',
          value: 'guest',
        },
      ],
      defaultValue: 'editor',
    },
  ],
}
