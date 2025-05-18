import { getPayload } from 'payload'
import type { Where } from 'payload'
import config from '@payload-config'
import { cache } from 'react'

export const getPages = cache(async (selector: object, filter: Where, isDraft: boolean) => {
  const payload = await getPayload({ config })

  const pages = await payload
    .find({
      collection: 'pages',
      depth: 2,
      limit: 1000,
      pagination: false,
      draft: isDraft,
      select: selector,
      where: filter,
    })
    .then((data) => data.docs)

  return pages
})

export const getPage = cache(async (selector: object, filter: Where, isDraft: boolean) => {
  const payload = await getPayload({ config })

  const page = await payload
    .find({
      collection: 'pages',
      depth: 2,
      limit: 1,
      draft: isDraft,
      select: selector,
      where: filter,
    })
    .then((data) => data.docs[0])

  return page
})
