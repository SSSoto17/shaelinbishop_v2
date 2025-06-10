import { SelectField, TabAsField } from 'payload'
import { Border } from '../border'
import { BackgroundClr } from './bgClr'
import { BackgroundImg } from './bgImg'

const BackgroundType: SelectField = {
  name: 'background',
  label: false,
  type: 'select',
  options: [
    {
      label: 'Color',
      value: 'bgClr',
    },
    {
      label: 'Image',
      value: 'bgImg',
    },
  ],
  admin: { placeholder: 'None', style: { alignSelf: 'end', maxWidth: '520px' } },
}

export const Background: TabAsField = {
  name: 'background',
  type: 'tab',
  fields: [
    {
      type: 'row',
      fields: [
        BackgroundType,
        BackgroundClr,
      ],
    },
    BackgroundImg,
    Border,
  ],
}
