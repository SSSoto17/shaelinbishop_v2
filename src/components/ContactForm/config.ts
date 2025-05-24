import { Block, Field } from 'payload'

const Description: Field = {
  name: 'info',
  label: 'Description',
  type: 'richText',
}

const Form: Field = {
  name: 'formFields',
  label: 'Form',
  type: 'array',
  labels: { singular: 'Form Field', plural: 'Form Fields' },
  fields: [
    {
      name: 'label',
      type: 'text',
    },
    {
      name: 'fieldType',
      label: 'Type',
      type: 'select',
      options: ['Text', 'Email', 'Textarea', 'Button'],
      defaultValue: 'Text',
      required: true,
    },
    {
      name: 'placeholder',
      type: 'text',
      label: 'Placeholder Text',
      admin: {
        condition: (data, { fieldType }) => {
          return fieldType !== 'Button'
        },
      },
    },
    {
      name: 'buttonAction',
      type: 'text',
      label: 'Form Action',
      admin: {
        condition: (data, { fieldType }) => {
          return fieldType === 'Button'
        },
      },
      required: true,
    },
  ],
}

export const ContactForm: Block = {
  slug: 'form',
  fields: [
    Description,
    Form,
  ],
}
