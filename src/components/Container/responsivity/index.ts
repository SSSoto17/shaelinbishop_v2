import { SelectField } from 'payload'

export const Responsive: SelectField = {
  name: 'device',
  virtual: true,
  type: 'select',
  options: [
    'mobile',
    'tablet',
    'desktop',
  ],
  defaultValue: 'mobile',
  admin: {
    components: {
      Field: '/components/Container/responsivity/Dropdown',
    },
  },
}
