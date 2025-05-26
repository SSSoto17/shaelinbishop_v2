import { FieldHook } from 'payload'

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
