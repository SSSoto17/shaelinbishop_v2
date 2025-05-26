import type { CollectionConfig } from 'payload'

// USERS
import { siteAccess, userName, userRole } from './Users'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    read: isAdminOrSelf,
    create: isAdmin,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
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
    siteAccess,
  ],
}

// Pages
import { PageContent, PageSlug, PageTitle } from './Pages'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    plural: 'Pages',
    singular: 'Page',
  },
  access: {
    read: () => true,
    create: AdminOrEditor,
    update: AdminOrEditor,
    delete: isAdmin,
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
  fields: [PageTitle, PageSlug, PageContent],
}

// IMAGES
import { altText, imgName, imgUpload } from './Images'
import { autoImgFileName, updateImgFileName } from './Images/hooks'

export const Images: CollectionConfig = {
  slug: 'images',

  admin: {
    useAsTitle: 'title',
    group: 'Media',
    defaultColumns: ['adminThumbnail', 'title', 'alt'],
  },
  access: {
    read: () => true,
    create: AdminOrEditor,
    update: AdminOrEditor,
    delete: AdminOrEditor,
  },
  fields: [imgName, altText],
  upload: { ...imgUpload },
  hooks: {
    beforeOperation: [autoImgFileName],
    beforeValidate: [updateImgFileName],
  },
}

// ICONS
import { iconName, iconUpload } from './Icons'

export const Icons: CollectionConfig = {
  slug: 'icons',
  admin: {
    useAsTitle: 'title',
    group: 'Media',
    defaultColumns: ['title'],
  },
  access: {
    read: () => true,
    create: AdminOrEditor,
    update: AdminOrEditor,
    delete: AdminOrEditor,
  },
  fields: [iconName],
  upload: { ...iconUpload },
}

// PUBLICATIONS
import { AdminOrEditor, isAdmin, isAdminOrSelf } from '@/lib/access'
import {
  Blurb,
  CategoryJoin,
  Cover,
  Description,
  Quotes,
  ReadCategory,
  ReadReleaseDate,
  ReadSlug,
  RetailerLinks,
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
    create: AdminOrEditor,
    update: AdminOrEditor,
    delete: isAdmin,
  },
  defaultSort: 'releaseDate',
  fields: [
    Title,
    ReadSlug,
    Blurb,
    Cover,
    Quotes,
    Testimonials,
    Description,
    ReleaseDetails,
    RetailerLinks,
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
    create: AdminOrEditor,
    update: AdminOrEditor,
    delete: AdminOrEditor,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Content',
  },
  fields: [
    Title,
    CategoryJoin,
  ],
}
