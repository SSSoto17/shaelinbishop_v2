import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Field } from 'payload'

// Book title
// Published date
// Book cover image
// Book blurb
// External links to buy the book at distributors

export const Title: Field = {
  name: 'title',
  type: 'text',
  required: true,
}

export const Cover: Field = {
  name: 'coverImg',
  type: 'upload',
  relationTo: 'images',
  admin: {
    position: 'sidebar',
  },
}

export const Blurb: Field = {
  name: 'description',
  type: 'richText',
  editor: lexicalEditor(),
}

export const PublishedDate: Field = {
  name: 'published',
  type: 'date',
}
