import { FieldHook } from 'payload'

export const Slugify: FieldHook = async ({ context, originalDoc: { id, slug }, req, value }) => {
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

  console.log(slugified)

  const result = await payload.update({
    collection: 'pages',
    id,
    user,
    data: { slug: slugified },
    context: { triggerAfterChange: false },
    req,
  })

  console.log(result)

  return value
}
