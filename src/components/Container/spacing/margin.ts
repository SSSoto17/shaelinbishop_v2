import { GroupField, OptionObject, SelectField } from 'payload'
import { ReadValue, SizeOptions } from './options'

// OPTIONS: Margin TYPE
const MarginBox: OptionObject = { label: 'Box', value: 'm' }
const MarginInline: OptionObject = { label: 'Inline', value: 'mx' }
const MarginBlock: OptionObject = { label: 'Block', value: 'my' }

// FIELDS
const Type: SelectField = {
  name: 'type',
  label: 'Margin',
  type: 'select',
  options: [
    // TypeNone,
    MarginBlock,
    MarginInline,
    MarginBox,
  ],
  admin: { placeholder: 'None', style: { maxWidth: '520px' } },
}

const Size: SelectField = {
  name: 'size',
  type: 'select',
  options: SizeOptions,
  admin: {
    placeholder: 'Auto',
    condition: (data, { type }) => type,
    style: { width: '25%' },
  },
}

export const Margin: GroupField = {
  name: 'margin',
  label: false,
  type: 'group',
  fields: [
    {
      type: 'row',
      fields: [
        Type,
        Size,
      ],
    },
    ReadValue,
  ],
  admin: {
    hideGutter: true,
    style: { maxWidth: '520px' },
  },
}
