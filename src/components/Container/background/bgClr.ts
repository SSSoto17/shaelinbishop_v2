import { TextField } from 'payload'

export const BackgroundClr: TextField = {
  name: 'bgClr',
  label: false,
  type: 'text',
  admin: {
    condition: (data, { background }) => background === 'bgClr',
    style: { width: '25%' },
    placeholder: 'Choose color',
  },
}
