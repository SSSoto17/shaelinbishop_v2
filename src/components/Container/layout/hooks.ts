import { FieldHook } from 'payload'

export const UpdateLayoutOptions: FieldHook = async ({
  collection,
  previousDoc,
  data,
  req: { user, payload },
  siblingData,
  value,
  path,
}) => {
  if (value === 'grid' && collection?.slug) {
    console.log('change value to grid')
    const result = await payload.findByID({
      collection: collection.slug,
      id: previousDoc?.id,
      select: {
        layoutSections: true,
      },
    })

    console.log(result)
    console.log(path)
  }
  if (value === 'flex') {
    console.log('change value to flex')
  }
}
