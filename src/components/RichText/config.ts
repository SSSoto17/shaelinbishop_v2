import { Block } from 'payload'

import { Padding } from '@/layout/padding'
import { Position } from '@/layout/position'

export const RichText: Block = {
  slug: 'richText',
  admin: { disableBlockName: true },
  fields: [
    Position,
    Padding,
    {
      name: 'body',
      type: 'richText',
    },
  ],
}
