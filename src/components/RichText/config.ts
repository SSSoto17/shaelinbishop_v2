import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block, RichTextField } from 'payload'
import { GridPosition } from '../Container/layout/grid'
import { Spacing } from '../Container/spacing'

const TextField: RichTextField = {
  name: 'body',
  type: 'richText',
  editor: lexicalEditor({
    features: ({ defaultFeatures, rootFeatures }) => [
      ...defaultFeatures,
      ...rootFeatures,
    ],
  }),
}

export const RichText: Block = {
  slug: 'richText',
  admin: { disableBlockName: true },
  fields: [
    TextField,
    GridPosition,
    Spacing,
  ],
}
