import { payload } from '@/lib/utils'
import { Where } from 'payload'
import { cache } from 'react'

export const getCategory = cache(async (id: string) => {
  console.log(id)
  const cat = await payload.findByID({
    collection: 'publicationCategories',
    id,
    depth: 2,
  })

  return cat
})

export const getCategories = cache(async (selector: object) => {
  const { docs } = await payload.find({
    collection: 'publicationCategories',
    depth: 2,
    select: selector,
  })

  return docs
})

export const getPublication = cache(async (selector: object, filter: Where, isDraft: boolean) => {
  const publication = await payload
    .find({
      collection: 'publications',
      depth: 2,
      limit: 1,
      draft: isDraft,
      select: selector,
      where: filter,
    })
    .then((data) => data.docs[0])

  return publication
})

export const getPublications = cache(async (selector: object, filter: Where, isDraft: boolean) => {
  const { docs } = await payload.find({
    collection: 'publications',
    depth: 2,
    limit: 100,
    pagination: false,
    draft: isDraft,
    select: selector,
    where: filter,
  })

  return docs
})
