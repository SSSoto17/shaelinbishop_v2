import { Field } from 'payload'
import { Accordion } from './Accordion/config'
import { Archive } from './Archive/config'
import { AuthorBio } from './AuthorBio/config'
import { ContactForm } from './ContactForm/config'
import { Featured } from './Featured/config'
import { MediaBlock } from './MediaBlock/config'
import { MediaWithTitle } from './MediaWithTitle/config'
import { Newsletter } from './Newsletter/config'
import { TextColumns } from './TextColumns/config'
import { Promo } from './YoutubePromo/config'

const Components: Field = {
  name: 'sections',
  type: 'blocks',
  minRows: 1,
  maxRows: 20,
  blocks: [
    AuthorBio,
    Archive,
    Accordion,
    ContactForm,
    Featured,
    MediaBlock,
    MediaWithTitle,
    Newsletter,
    Promo,
    TextColumns,
  ],
}

export const PageSections = {
  label: 'Content',
  fields: [
    // Possibly further configuration for styling purposes, like spacing?
    Components,
  ],
}
