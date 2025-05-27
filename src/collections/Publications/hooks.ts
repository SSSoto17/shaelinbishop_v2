import { checkRole, isGuest } from '@/lib/access'
import { CollectionAfterOperationHook, FieldHook } from 'payload'

export const UpdateCategory: FieldHook = async ({ data, req: { payload } }) => {
  const { title } = await payload.findByID({
    collection: 'publicationCategories',
    id: data?.releaseDetails.category,
  })
  return title
}

export const UpdateReleaseDate: FieldHook = async ({
  context,
  originalDoc: { id },
  req,
  value,
}) => {
  const { payload, user } = req

  if (context.triggerAfterChange === false) {
    return
  }

  const result = await payload.update({
    collection: 'publications',
    id,
    user,
    data: {
      releaseDate: value,
    },
    context: {
      triggerAfterChange: false,
    },
    req,
  })

  return result.releaseDate
}

export const FormatDate: FieldHook = ({ value }) => {
  if (value) {
    const date = new Date(value).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
    return date
  }
}

export const FormatDateToYear: FieldHook = ({ value }) => {
  if (value) {
    const date = new Date(value).toLocaleDateString('en-US', {
      year: 'numeric',
    })
    return date
  }
}

export const Slugify: FieldHook = async ({
  context,
  operation,
  originalDoc: { id },
  req,
  value,
}) => {
  if (operation === 'create') {
    return
  }

  const { user, payload } = req

  if (context.triggerAfterChange === false) {
    console.log('context')
    return
  }

  const slugified = '/' + value.replaceAll(' ', '-').replaceAll('/', '').toLowerCase()

  await payload.update({
    collection: 'publications',
    id,
    user,
    data: {
      slug: slugified,
    },
    context: {
      triggerAfterChange: false,
    },
    req,
  })

  return value
}

export const AssignPublication: CollectionAfterOperationHook = async ({
  operation,
  req,
  result,
}) => {
  if (operation === 'create') {
    const { user, payload } = req

    if (user?.role && checkRole(user?.role, isGuest)) {
      await payload.update({
        collection: 'users',
        id: user.id,
        req,
        data: {
          pubAccess: user.pubAccess?.concat(result),
        },
      })
    }
  }
}

// export const UnassignPage: CollectionBeforeDeleteHook = async ({
//   collection,
//   context,
//   id,
//   req,
// }) => {
//   const { user, payload } = req

//   const { docs } = await payload.find({
//     collection: 'users',
//     req,
//     depth: 3,
//     where: {
//       role: { equals: 'Guest' },
//     },
//     // where: {
//     //   siteAccess: { contains: id },
//     // },
//   })

//   const res = docs.map(({ siteAccess }) => {
//     console.log(siteAccess)
//     const test = siteAccess?.filter((item) => item != id)
//     console.log(test)
//   })
// }
