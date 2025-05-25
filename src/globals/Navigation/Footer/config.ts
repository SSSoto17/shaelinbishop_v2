import { NavBlock } from '@/components/Navigation/config'
import { GlobalConfig } from 'payload'
export const Footer: GlobalConfig = {
  slug: 'footer',
  admin: {
    group: 'Navigation',
  },
  access: { read: () => true },
  fields: [
    // Field to customize appearance?
    NavBlock,
  ],
}
