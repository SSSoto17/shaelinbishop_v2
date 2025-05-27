import { checkRole, isGuest } from '@/lib/access'
import { CollectionAfterOperationHook, FieldHook } from 'payload'

export const Slugify: FieldHook = async ({
  context,
  originalDoc: { id, slug },
  req,
  operation,
  value,
}) => {
  if (operation === 'create') {
    return
  }

  const { user, payload } = req

  if (context.triggerAfterChange === false) {
    return
  }

  let slugified

  if (slug) {
    slugified = '/' + slug.replaceAll('/', '').replaceAll(' ', '-').toLowerCase()
  } else {
    slugified = '/' + value.replaceAll('/', '').replaceAll(' ', '-').toLowerCase()
  }

  await payload.update({
    collection: 'pages',
    id,
    user,
    data: { slug: slugified },
    context: { triggerAfterChange: false },
    req,
  })

  return value
}

export const AssignPage: CollectionAfterOperationHook = async ({ operation, req, result }) => {
  if (operation === 'create') {
    const { user, payload } = req

    if (user?.role && checkRole(user?.role, isGuest)) {
      await payload.update({
        collection: 'users',
        id: user.id,
        req,
        data: {
          siteAccess: user.siteAccess?.concat(result),
        },
      })
    }
  }
}
