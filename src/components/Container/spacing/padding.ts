import { GroupField, OptionObject, SelectField } from 'payload'
import { ReadValue, SizeOptions } from './options'

// OPTIONS: PADDING TYPE
const PaddingBox: OptionObject = { label: 'Box', value: 'p' }
const PaddingInline: OptionObject = { label: 'Inline', value: 'px' }
const PaddingBlock: OptionObject = { label: 'Block', value: 'py' }

// FIELDS
const Type: SelectField = {
  name: 'type',
  label: 'Padding',
  type: 'select',
  options: [
    PaddingBlock,
    PaddingInline,
    PaddingBox,
  ],
  admin: { placeholder: 'None', style: { maxWidth: '520px' } },
}

const Size: SelectField = {
  name: 'size',
  type: 'select',
  options: SizeOptions,
  defaultValue: 'md',
  admin: {
    isClearable: false,
    condition: (data, { type }) => type,
    style: { width: '25%' },
  },
}

export const Padding: GroupField = {
  name: 'padding',
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
  admin: { hideGutter: true, style: { maxWidth: '520px' } },
}
