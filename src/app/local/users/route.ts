// import configPromise from '@payload-config'
// import { getPayload } from 'payload'

// const payload = await getPayload({
//   config: configPromise,
// })
import { cache } from 'react'
import { payload } from '@/lib/utils'

export const getUsers = cache(async () => {
  const users = await payload
    .find({
      collection: 'users',
      pagination: false,
    })
    .then((data) => data.docs)

  return users
})
