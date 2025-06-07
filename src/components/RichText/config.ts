import { Block, RichTextField } from 'payload'

import { Padding } from '@/layout/padding'
import { Position } from '@/layout/position'

// const Theme: EditorThemeClasses = {
//   characterLimit: '10',
// }

// const TextConfig: EditorConfig = {
//   namespace: 'RichText',
//   theme: Theme,
// }

const TextField: RichTextField = {
  name: 'body',
  type: 'richText',
  // editor: lexicalEditor({
  //   lexical: TextConfig,
  //   features: ({ defaultFeatures, rootFeatures }) => [
  //     ...defaultFeatures,
  //     ...rootFeatures,
  //   ],
  // }),
}

export const RichText: Block = {
  slug: 'richText',
  admin: { disableBlockName: true },
  fields: [
    Position,
    Padding,
    TextField,
  ],
}
