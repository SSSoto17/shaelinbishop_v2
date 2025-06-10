import { OptionObject, SelectField } from 'payload'

const Auto: OptionObject = { label: 'Auto', value: 'aspect-auto' }
const Square: OptionObject = { label: 'Square', value: 'aspect-square' }
const Landscape: OptionObject = { label: 'Landscape', value: 'aspect-video' }
const Portrait: OptionObject = { label: 'Portrait', value: 'aspect-[2/3]' }
const ThreeQuarters: OptionObject = { label: '3/4', value: 'aspect-[3/4]' }

export const AspectRatio: SelectField = {
  name: 'aspectRatio',
  type: 'select',
  options: [
    Auto,
    Square,
    Landscape,
    Portrait,
    ThreeQuarters,
  ],
  defaultValue: 'aspect-auto',
  admin: { isClearable: false },
}
