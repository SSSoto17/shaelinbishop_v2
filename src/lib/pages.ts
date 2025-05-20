import { payload } from '@/lib/utils'
import { Where } from 'payload'
import { cache } from 'react'

export const getPage = cache(async (selector: object, filter: Where, isDraft: boolean) => {
  const page = await payload
    .find({
      collection: 'pages',
      depth: 10,
      limit: 1,
      draft: isDraft,
      select: selector,
      where: filter,
    })
    .then((data) => data.docs[0])

  return page
})

export const getPages = cache(async (selector: object, filter: Where, isDraft: boolean) => {
  const pages = await payload
    .find({
      collection: 'pages',
      depth: 10,
      limit: 1000,
      pagination: false,
      draft: isDraft,
      select: selector,
      where: filter,
    })
    .then((data) => data.docs)

  return pages
})
