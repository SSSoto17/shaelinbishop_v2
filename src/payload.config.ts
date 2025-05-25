// PLUGINS
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor, LinkFeature } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

// MODULES
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

// COLLECTIONS
import {
  Icons,
  Images,
  Pages,
  PublicationCategories,
  Publications,
  Users,
} from './collections/config'

// GLOBALS
import { Footer } from './globals/Navigation/Footer/config'
import { Header } from './globals/Navigation/Header/config'
import { SiteSettings } from './globals/Site/config'

// PAYLOAD CONFIG
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_PAYLOAD_URL,
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  upload: {
    safeFileNames: true,
    preserveExtension: 16,
  },
  globals: [SiteSettings, Header, Footer],
  collections: [Users, Images, Icons, Pages, Publications, PublicationCategories],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      LinkFeature(),
    ],
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
    connectOptions: {
      dbName: 'payload-cms',
    },
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: { images: true, icons: true },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})
