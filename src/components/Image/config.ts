import { aspectRatio } from '@/layout/aspectRatio'
import { Padding } from '@/layout/padding'
import { Position } from '@/layout/position'
import { Block } from 'payload'

export const Image: Block = {
  slug: 'image',
  admin: {
    disableBlockName: true,
  },
  fields: [
    Position,
    {
      name: 'rows',
      type: 'select',
      options: [
        {
          label: 'Default',
          value: 'row-span-1',
        },
        {
          label: 'Span 2 rows',
          value: 'row-span-2',
        },
        { label: 'Span 3 rows', value: 'row-span-3' },
      ],
      admin: { isClearable: false },
      defaultValue: 'row-span-1',
    },
    Padding,
    {
      name: 'image',
      type: 'upload',
      relationTo: 'images',
    },
    aspectRatio,
    {
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
    },
  ],
}
