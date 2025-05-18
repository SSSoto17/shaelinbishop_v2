import {
  BeforeOperationHook,
  BeforeValidateHook,
} from 'node_modules/payload/dist/collections/config/types'

export const autoImgFileName: BeforeOperationHook = ({ req: { data }, operation }) => {
  if ((operation === 'create' || operation === 'update') && data) {
    const formatted = data.title.toLowerCase().replaceAll(' ', '')
    data.filename = `sbishop-${formatted}.wepb`
  }
}

export const updateImgFileName: BeforeValidateHook = ({ data, operation }) => {
  if ((operation === 'create' || operation === 'update') && data) {
    const formatted = data.title.toLowerCase().replaceAll(' ', '')
    data.filename = `sbishop-${formatted}.webp`
  }
}
