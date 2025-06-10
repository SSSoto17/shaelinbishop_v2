import { GroupField, SelectField } from 'payload'

const BorderSides: SelectField = {
  name: 'sides',
  label: 'Border',
  type: 'select',
  options: [
    { label: 'Top', value: 'border-t' },
    { label: 'Bottom', value: 'border-b' },
    { label: 'Left', value: 'border-l' },
    { label: 'Right', value: 'border-r' },
  ],
  hasMany: true,
  admin: {
    placeholder: 'None',
    style: { maxWidth: '520px', alignSelf: 'end' },
  },
}

const BorderClr: SelectField = {
  name: 'color',
  type: 'select',
  options: [],
  admin: {
    condition: (data, { sides }) => Boolean(sides?.length),
    style: { width: '25%' },
  },
}

export const Border: GroupField = {
  name: 'border',
  label: false,
  type: 'group',
  admin: {
    hideGutter: true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        BorderSides,
        BorderClr,
      ],
    },
  ],
}
