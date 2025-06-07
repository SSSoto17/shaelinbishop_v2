import { GroupField } from 'payload'

const gapOptions = [
  { label: 'None', value: 'none' },
  { label: 'Subtle', value: 'gap-xs' },
  { label: 'Small', value: 'gap-sm' },
  { label: 'Medium', value: 'gap-md' },
  { label: 'Large', value: 'gap-lg' },
  { label: 'Dramatic', value: 'gap-xl' },
]

const inlineGapOptions = [
  { label: 'None', value: 'none' },
  { label: 'Subtle', value: 'gap-x-xs' },
  { label: 'Small', value: 'gap-x-sm' },
  { label: 'Medium', value: 'gap-x-md' },
  { label: 'Large', value: 'gap-x-lg' },
  { label: 'Dramatic', value: 'gap-x-xl' },
]

const blockGapOptions = [
  { label: 'None', value: 'none' },
  { label: 'Subtle', value: 'gap-y-xs' },
  { label: 'Small', value: 'gap-y-sm' },
  { label: 'Medium', value: 'gap-y-md' },
  { label: 'Large', value: 'gap-y-lg' },
  { label: 'Dramatic', value: 'gap-y-xl' },
]

export const Gap: GroupField = {
  name: 'gap',
  type: 'group',
  label: false,
  admin: { hideGutter: true },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'gapSize',
          label: 'Gap',
          type: 'select',
          options: gapOptions,
          defaultValue: 'none',
          admin: {
            condition: (data, { separateGap }) => {
              return !separateGap
            },
            isClearable: false,
            style: { maxWidth: '50%' },
          },
        },
        {
          name: 'inlineGapSize',
          label: 'Horizontal Gap',
          type: 'select',
          options: inlineGapOptions,
          defaultValue: 'none',
          admin: {
            isClearable: false,
            condition: (data, { separateGap }) => {
              return separateGap
            },
          },
        },
        {
          name: 'blockGapSize',
          label: 'Vertical Gap',
          type: 'select',
          options: blockGapOptions,
          defaultValue: 'none',
          admin: {
            isClearable: false,
            condition: (data, { separateGap }) => {
              return separateGap
            },
          },
        },
        {
          name: 'separateGap',
          type: 'checkbox',
          label: 'Separate gap?',
          admin: { style: { alignSelf: 'end', flex: '0 1 auto' } },
        },
      ],
    },
  ],
}
