import type { Field } from 'payload'
// import { Slugify } from './hooks'

// PAGE OVERVIEW
export const PageTitle: Field = {
  name: 'title',
  type: 'text',
  required: true,
  unique: true,
  admin: {
    position: 'sidebar',
  },
}

export const PageSlug: Field = {
  name: 'slug',
  label: 'Path',
  type: 'text',
  unique: true,
  admin: {
    position: 'sidebar',
  },
  // hooks: {
  //   beforeValidate: [Slugify],
  // },
}

// ADD MEANS TO NEST PAGES; IS IT BUILT INTO PAYLOAD OR MANUAL CONFIG?

export const PageMeta: Field = {
  name: 'meta',
  type: 'group',
  admin: {
    position: 'sidebar',
  },
  fields: [{ name: 'description', type: 'textarea' }],
}

// PAGE CONTENT
import { PageHero } from '@/components/Hero/config'
import { PageSections } from '@/components/config'

const PageSEO = {
  label: 'SEO',
  fields: [],
}

export const PageContent: Field = {
  type: 'tabs',
  tabs: [PageHero, PageSections, PageSEO],
}
