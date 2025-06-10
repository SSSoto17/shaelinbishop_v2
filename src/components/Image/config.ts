import { Block, OptionObject, SelectField, UploadField } from 'payload'
import { GridPosition } from '../Container/layout/grid'
import { Spacing } from '../Container/spacing'

const AddImage: UploadField = {
  name: 'image',
  type: 'upload',
  relationTo: 'images',
}

const ObjPosition: SelectField = {
  name: 'imagePosition',
  type: 'select',
  options: [
    { label: 'Top', value: 'object-top' },
    { label: 'Top-Left', value: 'object-top-left' },
    { label: 'Top-Right', value: 'object-top-right' },
    { label: 'Left', value: 'object-left' },
    { label: 'Center', value: 'object-center' },
    { label: 'Right', value: 'object-right' },
    { label: 'Bottom', value: 'object-bottom' },
    { label: 'Bottom-Left', value: 'object-bottom-left' },
    { label: 'Bottom-Right', value: 'object-bottom-right' },
  ],
  admin: { isClearable: false },
  defaultValue: 'object-center',
}

const Auto: OptionObject = { label: 'Auto', value: 'aspect-auto' }
const Square: OptionObject = { label: 'Square', value: 'aspect-square' }
const Landscape: OptionObject = { label: 'Landscape', value: 'aspect-video' }
const Portrait: OptionObject = { label: 'Portrait', value: 'aspect-[2/3]' }
const ThreeQuarters: OptionObject = { label: '3/4', value: 'aspect-[3/4]' }

const AspectRatio: SelectField = {
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

export const Image: Block = {
  slug: 'image',
  admin: {
    disableBlockName: true,
  },
  fields: [
    AddImage,
    AspectRatio,
    ObjPosition,
    GridPosition,
    // Position,
    Spacing,
  ],
}
