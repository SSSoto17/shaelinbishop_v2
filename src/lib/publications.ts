import { payload } from '@/lib/utils'
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

// export const getPages = cache(async (selector: object, filter: Where, isDraft: boolean) => {
//   const pages = await payload
//     .find({
//       collection: 'pages',
//       depth: 10,
//       limit: 1000,
//       pagination: false,
//       draft: isDraft,
//       select: selector,
//       where: filter,
//     })
//     .then((data) => data.docs)

//   return pages
// })
