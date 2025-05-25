import { Block, Field } from 'payload'
import { LinkItems } from './LinkArray/config'

// FIELDS

// Layout
const Layout: Field = {
  name: 'navigationLayout',
  label: 'Appearance',
  type: 'group',
  fields: [],
}

// BLOCKS

// Copyright
const Copyright: Block = {
  slug: 'copyright',
  fields: [
    // Options to customize the appearance
  ],
}

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
    // Layout,
    LinkItems,
  ],
}

export const NavBlock: Field = {
  name: 'navigation',
  type: 'blocks',
  blocks: [Logo, Copyright, LinkArray],
}
