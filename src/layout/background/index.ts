import { Field, GroupField, SelectField } from 'payload'

const FullBleed: SelectField = {
  name: 'sectionWidth',
  label: 'Width',
  type: 'select',
  options: ['Full', 'Content'],
  defaultValue: 'Content',
  admin: { isClearable: false },
}

const BackgroundType: SelectField = {
  name: 'type',
  label: 'Background',
  type: 'select',
  options: [
    {
      label: 'None',
      value: 'none',
    },
    {
      label: 'Color',
      value: 'clr',
    },
    {
      label: 'Image',
      value: 'img',
    },
  ],
  defaultValue: 'none',
  admin: { isClearable: false },
}

const BackgroundClr: Field = {
  name: 'clr',
  label: 'Choose color',
  type: 'text',
  admin: {
    condition: (data, { type }) => {
      return type === 'clr'
    },
  },
}

const BackgroundImg: GroupField = {
  name: 'img',
  label: 'Choose background image',
  type: 'group',
  admin: {
    condition: (data, { type }) => {
      return type === 'img'
    },
  },
  fields: [],
}

export const Background: GroupField = {
  name: 'background',
  label: false,
  type: 'group',
  fields: [
    FullBleed,
    BackgroundType,
    BackgroundClr,
    BackgroundImg,
  ],
}
