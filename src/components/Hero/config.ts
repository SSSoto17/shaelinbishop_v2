import { Field } from 'payload'

const HeroOptions = [
  {
    label: 'High Impact',
    value: 'highImpact',
  },
  {
    label: 'Low Impact',
    value: 'lowImpact',
  },
  { label: 'Banner', value: 'banner' },
  { label: 'None', value: 'none' },
]

const HeroType: Field = {
  name: 'type',
  type: 'select',
  required: true,
  options: HeroOptions,
  defaultValue: 'none',
}

const HeroTitle: Field = {
  name: 'heading',
  type: 'text',
}

const HeroImage: Field = {
  name: 'image',
  label: 'Background Image',
  type: 'upload',
  relationTo: 'images',
  required: true,
}

const HeroContent: Field = {
  name: 'content',
  label: false,
  type: 'group',
  admin: {
    hideGutter: true,
    condition: (siblingData) => {
      return siblingData.hero.type == 'none' ? false : true
    },
  },
  fields: [HeroTitle, HeroImage],
}

export const PageHero = {
  name: 'hero',
  label: 'Hero',
  fields: [HeroType, HeroContent],
}
