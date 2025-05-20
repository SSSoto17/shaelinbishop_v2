import { Field } from 'payload'
import { Accordion } from './Accordion/config'
import { AuthorBio } from './AuthorBio/config'
import { MediaBlock } from './MediaBlock/config'
import { Newsletter } from './Newsletter/config'

const Components: Field = {
  name: 'sections',
  type: 'blocks',
  minRows: 1,
  maxRows: 20,
  blocks: [AuthorBio, Accordion, MediaBlock, Newsletter],
}

export const PageSections = {
  label: 'Content',
  fields: [
    // Possibly further configuration for styling purposes, like spacing?
    Components,
  ],
}
