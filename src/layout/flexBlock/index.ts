import { Components } from '@/components'
import { Block, GroupField, SelectField } from 'payload'
import { Background } from '../background'
import { Gap } from '../gap'
import { Padding } from '../padding'

const LayoutConfiguration: SelectField = {
  name: 'flexDirection',
  label: 'Direction',
  type: 'select',
  options: [
    {
      label: 'Horizontal',
      value: 'flexRow',
    },
    {
      label: 'Vertical',
      value: 'flexCol',
    },
  ],
  admin: { isClearable: false, style: { maxWidth: '50%' } },
  defaultValue: 'flexRow',
}

export const FlexConfiguration: GroupField = {
  name: 'layout',
  type: 'group',
  fields: [
    {
      type: 'row',
      fields: [
        LayoutConfiguration,
        {
          name: 'isReversed',
          label: 'Reverse?',
          type: 'checkbox',
          hooks: {
            afterChange: [
              () => {},
            ],
          },
          admin: {
            style: { alignSelf: 'end', flex: '0 1 auto' },
          },
        },
        {
          name: 'isWrapped',
          label: 'Wrap?',
          type: 'checkbox',
          hooks: {
            afterChange: [
              () => {},
            ],
          },
          admin: {
            style: { alignSelf: 'end', flex: '0 1 auto' },
          },
        },
      ],
    },
    Gap,
  ],
}

export const FlexBlock: Block = {
  slug: 'flex',
  fields: [
    Background,
    Padding,
    Components,
  ],
}
