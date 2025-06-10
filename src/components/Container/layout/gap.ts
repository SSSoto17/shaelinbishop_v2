import { CheckboxField, OptionObject, RowField, SelectField } from 'payload'

const OptionSubtle: OptionObject = { label: 'Subtle', value: 'gap-xs' }
const OptionSmall: OptionObject = { label: 'Small', value: 'gap-sm' }
const OptionMedium: OptionObject = { label: 'Medium', value: 'gap-md' }
const OptionLarge: OptionObject = { label: 'Large', value: 'gap-lg' }
const OptionDramatic: OptionObject = { label: 'Dramatic', value: 'gap-xl' }

const OptionInlineSubtle: OptionObject = { label: 'Subtle', value: 'gap-x-xs' }
const OptionInlineSmall: OptionObject = { label: 'Small', value: 'gap-x-sm' }
const OptionInlineMedium: OptionObject = { label: 'Medium', value: 'gap-x-md' }
const OptionInlineLarge: OptionObject = { label: 'Large', value: 'gap-x-lg' }
const OptionInlineDramatic: OptionObject = { label: 'Dramatic', value: 'gap-x-xl' }

const OptionBlockSubtle: OptionObject = { label: 'Subtle', value: 'gap-y-xs' }
const OptionBlockSmall: OptionObject = { label: 'Small', value: 'gap-y-sm' }
const OptionBlockMedium: OptionObject = { label: 'Medium', value: 'gap-y-md' }
const OptionBlockLarge: OptionObject = { label: 'Large', value: 'gap-y-lg' }
const OptionBlockDramatic: OptionObject = { label: 'Dramatic', value: 'gap-y-xl' }

const GapOptions = [
  OptionSubtle,
  OptionSmall,
  OptionMedium,
  OptionLarge,
  OptionDramatic,
]

const InlineGapOptions = [
  OptionInlineSubtle,
  OptionInlineSmall,
  OptionInlineMedium,
  OptionInlineLarge,
  OptionInlineDramatic,
]

const BlockGapOptions = [
  OptionBlockSubtle,
  OptionBlockSmall,
  OptionBlockMedium,
  OptionBlockLarge,
  OptionBlockDramatic,
]

const GapSize: SelectField = {
  name: 'gap',
  label: 'Gap',
  type: 'select',
  options: GapOptions,
  admin: {
    placeholder: 'None',
    condition: (data, { separateGap }) => !separateGap,
    style: { maxWidth: '200px' },
  },
}

const InlineGapSize: SelectField = {
  name: 'inlineGap',
  label: 'Horizontal gap',
  type: 'select',
  options: InlineGapOptions,
  admin: {
    placeholder: 'None',
    condition: (data, { separateGap }) => separateGap,
    style: { maxWidth: '200px' },
  },
}

const BlockGapSize: SelectField = {
  name: 'blockGap',
  label: 'Vertical gap',
  type: 'select',
  options: BlockGapOptions,
  admin: {
    placeholder: 'None',
    condition: (data, { separateGap }) => separateGap,
    style: { maxWidth: '200px' },
  },
}

const SeparateGap: CheckboxField = {
  name: 'separateGap',
  type: 'checkbox',
  label: 'Separate gap?',
  admin: { style: { alignSelf: 'end', flex: '0 1 auto' } },
}

export const Gap: RowField = {
  type: 'row',
  fields: [
    GapSize,
    InlineGapSize,
    BlockGapSize,
    SeparateGap,
  ],
  admin: {
    condition: (data, { type }) => type,
  },
}
