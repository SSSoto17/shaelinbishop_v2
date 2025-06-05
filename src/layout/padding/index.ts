import { GroupField, SelectField } from 'payload'

const PaddingType: SelectField = {
  name: 'type',
  type: 'select',
  options: [
    { label: 'None', value: 'none' },
    { label: 'Block', value: 'py' },
    { label: 'Inline', value: 'px' },
    { label: 'Box', value: 'p' },
  ],
  defaultValue: 'none',
  admin: { isClearable: false },
}

const PaddingSize: SelectField = {
  name: 'size',
  type: 'select',
  options: [
    { label: 'Subtle', value: 'xs' },
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Dramatic', value: 'xl' },
  ],
  defaultValue: 'md',
  admin: {
    isClearable: false,
    condition: (data, { type }) => {
      return type !== 'none'
    },
  },
}

export const Padding: GroupField = {
  name: 'padding',
  type: 'group',
  fields: [
    {
      type: 'row',
      fields: [
        PaddingType,
        PaddingSize,
      ],
    },
  ],
}
