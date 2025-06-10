import { OptionObject, TextField } from 'payload'

// OPTIONS: SIZE
const SizeSubtle: OptionObject = { label: 'Subtle', value: 'xs' }
const SizeSmall: OptionObject = { label: 'Small', value: 'sm' }
const SizeMedium: OptionObject = { label: 'Medium', value: 'md' }
const SizeLarge: OptionObject = { label: 'Large', value: 'lg' }
const SizeDramatic: OptionObject = { label: 'Dramatic', value: 'xl' }

export const SizeOptions = [
  SizeSubtle,
  SizeSmall,
  SizeMedium,
  SizeLarge,
  SizeDramatic,
]

export const MarginAuto: OptionObject = { label: 'Auto', value: 'auto' }
export const ReadValue: TextField = {
  name: 'value',
  type: 'text',
  admin: { hidden: true },
  hooks: {
    afterRead: [
      ({ siblingData: { type, size } }) =>
        type ? `${type}-${size || 'auto'}` : '',
    ],
  },
}
