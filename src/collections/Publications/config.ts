import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Field } from 'payload'
import { Slugify } from '../Pages/hooks'
import { UpdateCategory } from './hooks'

// GENERAL

export const Title: Field = {
  name: 'title',
  type: 'text',
  required: true,
  hooks: {
    afterChange: [
      Slugify,
    ],
  },
}

export const ReadSlug: Field = {
  name: 'slug',
  type: 'text',
  admin: {
    hidden: true,
    condition: ({ categoryName }) => {
      if (categoryName === 'Short Fiction') {
        return false
      }
      if (categoryName === 'Poetry') {
        return false
      }

      return true
    },
  },
}

export const Cover: Field = {
  name: 'coverImg',
  type: 'upload',
  relationTo: 'images',
  admin: {
    position: 'sidebar',
    condition: ({ categoryName }) => {
      return categoryName == 'Books' || categoryName == 'Collections'
    },
  },
}

export const Description: Field = {
  name: 'description',
  label: 'Premise',
  type: 'richText',
  admin: {
    position: 'sidebar',
  },
}

export const Blurb: Field = {
  name: 'blurb',
  type: 'richText',
  editor: lexicalEditor(),
}

export const Quotes: Field = {
  name: 'quotes',
  label: false,
  labels: { plural: 'Quotes', singular: 'Quote' },
  type: 'array',
  maxRows: 5,
  fields: [
    { name: 'quote', type: 'richText' },
  ],
}

export const Testimonials: Field = {
  name: 'testimonials',
  label: false,
  labels: { plural: 'Testimonial', singular: 'Testimonials' },
  type: 'array',
  maxRows: 5,
  fields: [
    { name: 'quote', type: 'richText' },
    { name: 'quotee', type: 'text' },
  ],
}

// RELEASE DETAILS

export const ReadReleaseDate: Field = {
  name: 'releaseDate',
  type: 'date',
  admin: {
    hidden: true,
  },
}

export const ReadCategory: Field = {
  name: 'categoryName',
  type: 'text',
  virtual: true,
  admin: {
    hidden: true,
  },
  hooks: {
    afterRead: [
      UpdateCategory,
    ],
  },
}

// CATEGORIES

export const CategoryJoin: Field = {
  name: 'categoryJoin',
  access: {
    read: () => true,
  },
  type: 'join',
  collection: 'publications',
  on: 'releaseDetails.category',
  label: 'Current Work in this Category',
}

// External links to buy the book at distributors

export const RetailerLinks: Field = {
  name: 'retailerLinks',
  type: 'array',
  label: 'Distributors',
  admin: {
    position: 'sidebar',
  },
  labels: { singular: 'Retailer', plural: 'Retailers' },
  fields: [
    {
      name: 'retailer',
      type: 'text',
    },
    {
      name: 'url',
      label: 'Link',
      type: 'text',
    },
  ],
}
