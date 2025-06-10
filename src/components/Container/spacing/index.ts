import { GroupField } from 'payload'
import { Margin } from './margin'
import { Padding } from './padding'

export const Spacing: GroupField = {
  name: 'spacing',
  label: false,
  type: 'group',
  fields: [
    Margin,
    Padding,
  ],
}
