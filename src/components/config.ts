import { Field, Block } from 'payload'
// import { AuthorBio } from './AuthorBio/ConfigAuthorBio'
// import { Newsletter } from './Newsletter/ConfigNewsletter'

const TestBlock: Block = {
  slug: 'testblock',
  fields: [
    {
      type: 'text',
      name: 'test',
    },
  ],
}

const Components: Field = {
  name: 'sections',
  type: 'blocks',
  minRows: 1,
  maxRows: 20,
  blocks: [TestBlock],
  //   blocks: [AuthorBio, Newsletter],
}

export const PageSections = {
  label: 'Content',
  fields: [
    // Possibly further configuration for styling purposes, like spacing?
    Components,
  ],
}
