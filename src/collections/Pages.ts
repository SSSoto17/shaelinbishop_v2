import type { CollectionConfig, Field } from 'payload'

const PageTitle: Field = {
  name: 'title',
  label: 'Title',
  type: 'text',
  required: true,
  unique: true,
}

const PageSlug: Field = {
  name: 'slug',
  type: 'text',
  required: true,
  unique: true,
  //   hooks: {
  //     beforeValidate: [
  //       ({ value, data }) => {
  //         let string
  //         console.log(value)
  //         if (!value) {
  //           string = data?.title || ''
  //         } else {
  //           string = value
  //         }

  //         const slugified = '/' + string?.replaceAll(' ', '-').replaceAll('/', '').toLowerCase()

  //         return slugified
  //       },
  //     ],
  //   },
}

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    plural: 'Pages',
    singular: 'Page',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Navigation',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
    },
  },
  fields: [PageTitle, PageSlug],
}
