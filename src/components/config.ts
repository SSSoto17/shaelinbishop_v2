import { Field } from 'payload'
import { AuthorBio } from './AuthorBio/config'
import { Newsletter } from './Newsletter/config'

const Components: Field = {
  name: 'sections',
  type: 'blocks',
  minRows: 1,
  maxRows: 20,
  blocks: [AuthorBio, Newsletter],
}

export const PageSections = {
  label: 'Content',
  fields: [
    // Possibly further configuration for styling purposes, like spacing?
    Components,
  ],
}
