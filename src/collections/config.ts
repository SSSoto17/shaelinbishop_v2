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
import { PageTitle, PageSlug, PageMeta, PageContent } from './Pages'

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
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
    },
  },
  fields: [PageTitle, PageSlug, PageMeta, PageContent],
}

// IMAGES
import { imgName, altText, upload } from './Images'
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
