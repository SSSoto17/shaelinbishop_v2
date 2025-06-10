import { UploadField } from 'payload'

export const BackgroundImg: UploadField = {
  name: 'bgImg',
  label: false,
  type: 'upload',
  admin: {
    condition: (data, { background }) => background === 'bgImg',
    style: { maxWidth: '520px' },
  },
  relationTo: 'images',
}
