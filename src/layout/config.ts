// LAYOUT BLOCK
// The layout block is a SECTION with configurable layout options. Shaelin will be able to select various layouts in either a grid or flex format.
// It will also be possible to add a background image or color for the section.
// They will be able to determine padding and margin.
// The layout block will have means of configuring responsivity.
// Most importantly, the layout block will grant access to the COMPONENTs that will be the building blocks for each layout block section (Image, heading, rich text, buttons, etc.)

import { BlocksField } from 'payload'

// const GridBlock: Block = {
//   slug: 'grid',
//   fields: [
//     Background,
//     Padding,
//     {
//       name: 'sections',
//       type: 'select',
//       options: [
//         { label: 'Single', value: 'colFull' },
//         { label: '1/2 - Two columns', value: 'col2' },
//         { label: '1/3 - Three columns', value: 'col3' },
//         { label: '1/4 - Four columns', value: 'col4' },
//         { label: '1/6 - Six columns', value: 'col6' },
//       ],
//       defaultValue: 'colFull',
//       admin: {
//         isClearable: false,
//       },
//     },
//     Gap,
//     Components,
//   ],
// }

import { Container } from '@/components/Container/config'

const LayoutBlocks: BlocksField = {
  name: 'layoutSections',
  label: false,
  labels: { singular: 'Section', plural: 'Sections' },
  type: 'blocks',
  maxRows: 20,
  blocks: [
    // BUILDING BLOCKS
    // GridBlock,
    // FlexBlock,
  ],
  blockReferences: [Container],
}

export const TestingLayout = {
  label: 'Layout Blocks',
  fields: [
    // Possibly further configuration for styling purposes, like spacing?
    // Components,
    LayoutBlocks,
  ],
}
