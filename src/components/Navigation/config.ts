import { Block, Field } from 'payload'
import { LinkItems } from './LinkArray/config'

// FIELDS

// Copyright
const Copyright: Field = {
  name: 'siteCopyright',
  type: 'checkbox',
  defaultValue: false,
}

// Layout
const Layout: Field = {
  name: 'navigationLayout',
  type: 'group',
  fields: [],
}

// BLOCKS

// Logo
const Logo: Block = {
  slug: 'logo',
  fields: [
    {
      name: 'displayLogo',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'chooseLogo',
      label: 'Select appearance',
      type: 'select',
      options: ['Default', 'Minimal'],
      defaultValue: 'Default',
    },
  ],
}

// Link array
// w/ability to customize appearance, show/hide label, icons etc.
const LinkArray: Block = {
  slug: 'linkArray',
  labels: { singular: 'Menu', plural: 'Menus' },
  fields: [
    Copyright,
    Layout,
    LinkItems,
  ],
}

export const NavBlock: Field = {
  name: 'navigation',
  type: 'blocks',
  blocks: [Logo, LinkArray],
}
