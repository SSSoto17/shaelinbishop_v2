import type { CollectionConfig } from 'payload'

// USERS
import { userName, userRole } from './Users'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    group: 'Admin',
    useAsTitle: 'email',
    defaultColumns: ['email', 'role'],
  },
  auth: true,
  fields: [
    // Email added by default
    userName,
    userRole,
  ],
}

// Pages
import { PageContent, PageMeta, PageSlug, PageTitle } from './Pages'

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
    group: 'Content',
    defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
    preview: ({ slug }, { req: { protocol, host, user } }) => {
      let token
      if (user) {
        token = process.env.PREVIEW_SECRET
      }
      return `${protocol}//${host}/preview?direct=${slug}&secret=${token}`
    },
    livePreview: {
      url: ({ data: { slug }, req: { user, protocol, host } }) => {
        let token
        if (user) {
          token = process.env.PREVIEW_SECRET
        }
        return `${protocol}//${host}/preview?live=${slug}&secret=${token}`
      },
    },
  },
  versions: {
    drafts: {
      autosave: {
        interval: 300,
      },
    },
  },
  fields: [PageTitle, PageSlug, PageMeta, PageContent],
}

// IMAGES
import { altText, imgName, upload } from './Images'
import { autoImgFileName, updateImgFileName } from './Images/hooks'

export const Images: CollectionConfig = {
  slug: 'images',
  admin: {
    useAsTitle: 'title',
    group: 'Media',
    defaultColumns: ['title', 'alt'],
  },
  access: {
    read: () => true,
  },
  fields: [imgName, altText],
  upload: { ...upload },
  hooks: {
    beforeOperation: [autoImgFileName],
    beforeValidate: [updateImgFileName],
  },
}

// PUBLICATIONS
import {
  Blurb,
  CategoryJoin,
  Cover,
  Description,
  Quotes,
  ReadCategory,
  ReadReleaseDate,
  Testimonials,
  Title,
} from './Publications/config'
import { ReleaseDetails } from './Publications/release.config'

export const Publications: CollectionConfig = {
  slug: 'publications',
  labels: { singular: 'Publication', plural: 'Publications' },
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    defaultColumns: ['title', 'categoryName'],
  },
  access: {
    read: () => true,
    update: ({ req: { user } }) => {
      return Boolean(user)
    },
  },
  defaultSort: 'releaseDate',
  fields: [
    Title,
    Blurb,
    Cover,
    Quotes,
    Testimonials,
    Description,
    ReleaseDetails,
    ReadCategory,
    ReadReleaseDate,
  ],
  defaultPopulate: {
    slug: true,
    fields: true,
  },
  versions: {
    drafts: true,
  },
}

// PUBLICATION CATEGORIES
export const PublicationCategories: CollectionConfig = {
  slug: 'publicationCategories',
  labels: { singular: 'Category', plural: 'Categories' },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Admin',
  },
  fields: [
    Title,
    CategoryJoin,
  ],
}
