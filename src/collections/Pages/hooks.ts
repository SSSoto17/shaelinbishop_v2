import { FieldHook } from 'payload'

export const Slugify: FieldHook = async ({ context, originalDoc: { id }, req, value }) => {
  const { user, payload } = req

  if (context.triggerAfterChange === false) {
    return
  }

  const slugified = '/' + value.replaceAll(' ', '-').replaceAll('/', '').toLowerCase()

  const result = await payload.update({
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

  console.log(result)

  return value
}
