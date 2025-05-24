import { Field } from 'payload'
import { FormatDate, FormatDateToYear, UpdateReleaseDate } from './hooks'

const statusOptions = [
  { label: 'Planning', value: 'In Early Development' },
  { label: 'Drafting', value: 'Draft' },
  { label: 'Editing', value: 'Editing Stage' },
  { label: 'On submission', value: 'On Submission' },
  { label: 'Awaiting release', value: 'TBA' },
  { label: 'Published', value: 'Published' },
]

const isPublished: Field = {
  name: 'isPublished',
  label: 'Status',
  type: 'select',
  options: statusOptions,
  defaultValue: statusOptions[0].value,
}

const PublishedDate: Field = {
  name: 'publishedDate',
  type: 'date',
  admin: {
    date: {
      displayFormat: 'MMM dd, yyyy',
      pickerAppearance: 'dayOnly',
    },
    condition: ({ categoryName }, { isPublished }) => {
      if (categoryName === 'Books' || categoryName === 'Collections') {
        return isPublished === 'Published'
      } else return false
    },
  },
  hooks: {
    afterRead: [
      FormatDate,
    ],
  },
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

const PublicationType: Field = {
  name: 'publicationType',
  label: 'Type',
  type: 'select',
  options: ['Collection', 'Literary magazine'],
  defaultValue: 'Collection',
}

const LitMagTitle: Field = {
  name: 'title',
  type: 'text',
}

const LitMagDate: Field = {
  name: 'date',
  type: 'date',
  admin: {
    date: {
      displayFormat: 'yyyy',
    },
  },
  hooks: {
    afterChange: [UpdateReleaseDate],
    afterRead: [
      FormatDateToYear,
    ],
  },
}

const LitMagURL: Field = {
  name: 'url',
  label: 'Link',
  type: 'text',
}

const LitMag: Field = {
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
    LitMagTitle,
    LitMagDate,
    LitMagURL,
  ],
}

const CollectionRelation: Field = {
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
        equals: data.id,
      },
    }
  },
  admin: {
    condition: (data, { publicationType }) => {
      return publicationType === 'Collection'
    },
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
    PublicationType,
    LitMag,
    CollectionRelation,
  ],
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
