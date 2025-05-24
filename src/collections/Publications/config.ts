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

export const isPublished: Field = {
  name: 'isPublished',
  label: 'Status',
  type: 'select',
  options: [
    { label: 'Planning', value: 'In Early Development' },
    { label: 'Drafting', value: 'Draft' },
    { label: 'Editing', value: 'Editing Stage' },
    { label: 'On submission', value: 'On Submission' },
    { label: 'Awaiting release', value: 'TBA' },
    { label: 'Published', value: 'Published' },
  ],
  defaultValue: '',
}

export const PublishedDate: Field = {
  name: 'publishedDate',
  type: 'date',
  admin: {
    date: {
      displayFormat: 'MMM dd, yyyy',
      pickerAppearance: 'dayOnly',
    },
    condition: ({ categoryName }, { isPublished }) => {
      return isPublished === 'Published' && categoryName !== 'Short Fiction'
    },
  },
  hooks: {
    afterRead: [
      ({ value }) => {
        if (value) {
          const date = new Date(value)
          const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
          return formattedDate
        }
      },
    ],
  },
}

const PublishedIn: Field = {
  name: 'publishedIn',
  type: 'array',
  label: false,
  maxRows: 3,
  labels: { plural: 'Publications', singular: 'Publication' },
  admin: {
    condition: ({ releaseDetails: { isPublished }, categoryName }) => {
      return isPublished === 'Published' && categoryName !== 'Books'
    },
  },
  fields: [
    {
      name: 'publicationType',
      label: 'Type',
      type: 'select',
      options: ['Collection', 'Literary magazine'],
      defaultValue: 'Collection',
    },
    {
      name: 'magazine',
      type: 'group',
      label: false,
      admin: {
        hideGutter: true,
        condition: (data, { publicationType }) => {
          return publicationType === 'Literary magazine'
        },
      },
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
        },
        {
          name: 'date',
          type: 'date',
          admin: {
            date: {
              displayFormat: 'yyyy',
            },
          },
          hooks: {
            afterRead: [
              ({ value }) => {
                const date = new Date(value).toLocaleDateString('en-US', {
                  year: 'numeric',
                })
                return date
              },
            ],
          },
        },
        {
          name: 'url',
          label: 'Link',
          type: 'text',
        },
      ],
    },
    {
      name: 'collectionTitle',
      label: 'Title',
      type: 'relationship',
      relationTo: 'publications',
      filterOptions: async ({ req: { payload } }) => {
        const { docs: cat } = await payload.find({
          collection: 'publicationCategories',
          limit: 1,
          where: {
            title: {
              equals: 'Collections',
            },
          },
        })
        const data = cat[0]

        return {
          'releaseDetails.category': {
            equals: data?.id,
          },
        }
      },
      admin: {
        condition: (data, { publicationType }) => {
          return publicationType === 'Collection'
        },
      },
    },
  ],
}

const Category: Field = {
  name: 'category',
  label: 'Category',
  type: 'relationship',
  access: {
    read: () => true,
  },
  relationTo: 'publicationCategories',
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
      async ({ data, req: { payload } }) => {
        const { title } = await payload.findByID({
          collection: 'publicationCategories',
          id: data?.releaseDetails.category,
        })
        return title
      },
    ],
  },
}

export const ReleaseDetails: Field = {
  name: 'releaseDetails',
  label: false,
  admin: {
    hideGutter: true,
    position: 'sidebar',
  },
  type: 'group',
  fields: [Category, isPublished, PublishedDate, PublishedIn],
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
