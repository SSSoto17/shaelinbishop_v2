// LAYOUT BLOCK
// The layout block is a SECTION with configurable layout options. Shaelin will be able to select various layouts in either a grid or flex format.
// It will also be possible to add a background image or color for the section.
// They will be able to determine padding and margin.
// The layout block will have means of configuring responsivity.
// Most importantly, the layout block will grant access to the COMPONENTs that will be the building blocks for each layout block section (Image, heading, rich text, buttons, etc.)

import { Image } from '@/components/Image/config'
import { RichText } from '@/components/RichText/config'
import { Block, BlocksField, GroupField } from 'payload'
import { Background } from './background'
import { Padding } from './padding'

const gapOptions = [
  { label: 'None', value: 'none' },
  { label: 'Subtle', value: 'gap-xs' },
  { label: 'Small', value: 'gap-sm' },
  { label: 'Medium', value: 'gap-md' },
  { label: 'Large', value: 'gap-lg' },
  { label: 'Dramatic', value: 'gap-xl' },
]

const inlineGapOptions = [
  { label: 'None', value: 'none' },
  { label: 'Subtle', value: 'gap-x-xs' },
  { label: 'Small', value: 'gap-x-sm' },
  { label: 'Medium', value: 'gap-x-md' },
  { label: 'Large', value: 'gap-x-lg' },
  { label: 'Dramatic', value: 'gap-x-xl' },
]

const blockGapOptions = [
  { label: 'None', value: 'none' },
  { label: 'Subtle', value: 'gap-y-xs' },
  { label: 'Small', value: 'gap-y-sm' },
  { label: 'Medium', value: 'gap-y-md' },
  { label: 'Large', value: 'gap-y-lg' },
  { label: 'Dramatic', value: 'gap-y-xl' },
]

const Components: BlocksField = {
  name: 'components',
  label: 'Content',
  type: 'blocks',
  blocks: [RichText, Image],
}

const Gap: GroupField = {
  name: 'gap',
  type: 'group',
  label: false,
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'gapSize',
          label: 'Gap',
          type: 'select',
          options: gapOptions,
          defaultValue: 'none',
          admin: {
            condition: (data, { separateGap }) => {
              return !separateGap
            },
            isClearable: false,
          },
        },
        {
          name: 'inlineGapSize',
          label: 'Horizontal Gap',
          type: 'select',
          options: inlineGapOptions,
          defaultValue: 'none',
          admin: {
            isClearable: false,
            condition: (data, { separateGap }) => {
              return separateGap
            },
          },
        },
        {
          name: 'blockGapSize',
          label: 'Vertical Gap',
          type: 'select',
          options: blockGapOptions,
          defaultValue: 'none',
          admin: {
            isClearable: false,
            condition: (data, { separateGap }) => {
              return separateGap
            },
          },
        },
        {
          name: 'separateGap',
          type: 'checkbox',
          label: 'Separate gap?',
          admin: { style: { alignSelf: 'end' } },
        },
      ],
    },
  ],
}

const GridBlock: Block = {
  slug: 'grid',
  fields: [
    Background,
    Padding,
    {
      name: 'sections',
      type: 'select',
      options: [
        { label: 'Single', value: 'colFull' },
        { label: '1/2 - Two columns', value: 'col2' },
        { label: '1/3 - Three columns', value: 'col3' },
        { label: '1/4 - Four columns', value: 'col4' },
        { label: '1/6 - Six columns', value: 'col6' },
      ],
      defaultValue: 'colFull',
      admin: {
        isClearable: false,
      },
    },
    Gap,
    Components,
  ],
}

const FlexBlock: Block = {
  slug: 'flex',
  fields: [
    Background,
    Padding,
    Components,
  ],
}

const LayoutBlocks: BlocksField = {
  name: 'layoutSections',
  label: false,
  labels: { singular: 'Section', plural: 'Sections' },
  type: 'blocks',
  maxRows: 20,
  blocks: [
    // BUILDING BLOCKS
    GridBlock,
    FlexBlock,
  ],
}

export const TestingLayout = {
  label: 'Testing Layout Blocks',
  fields: [
    // Possibly further configuration for styling purposes, like spacing?
    // Components,
    LayoutBlocks,
  ],
}
