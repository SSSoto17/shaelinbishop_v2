import { FieldHook } from 'payload'

export const Slugify: FieldHook = ({ value, data }) => {
  let string
  console.log(value)
  if (!value) {
    string = data?.title || ''
  } else {
    string = value
  }

  const slugified = '/' + string?.replaceAll(' ', '-').replaceAll('/', '').toLowerCase()

  return slugified
}
