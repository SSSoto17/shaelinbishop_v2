import { BlocksField } from 'payload'
import { Image } from './Image/config'
import { RichText } from './RichText/config'

export const Components: BlocksField = {
  name: 'components',
  labels: { singular: 'component', plural: 'components' },
  label: false,
  type: 'blocks',
  blocks: [],
  blockReferences: [Image, RichText],
}
