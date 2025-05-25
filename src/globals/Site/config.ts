import { Field, GlobalConfig } from 'payload'

const Title: Field = {
  name: 'siteTitle',
  type: 'text',
  required: true,
  defaultValue: 'Shaelin Bishop',
}

const Logo: Field = {
  name: 'siteLogo',
  type: 'upload',
  relationTo: 'images',
}

const Favicon: Field = {
  name: 'favicon',
  type: 'upload',
  relationTo: 'icons',
}

export const SiteSettings: GlobalConfig = {
  slug: 'siteSettings',
  admin: {
    group: 'Admin',
  },
  access: { read: () => true },
  fields: [
    Title,
    Logo,
    Favicon,
    // To do: color themes + fonts
  ],
}
