import { BlocksField } from 'payload'
import { Image } from './Image/config'
import { RichText } from './RichText/config'

export const Components: BlocksField = {
  name: 'components',
  label: 'Content',
  type: 'blocks',
  blocks: [RichText, Image],
}
