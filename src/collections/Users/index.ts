import type { Field } from 'payload'

const firstName: Field = {
  type: 'text',
  name: 'firstName',
  label: 'First Name',
}

const lastName: Field = {
  type: 'text',
  name: 'lastName',
  label: 'Last Name',
}

const userRoleOptions = [
  {
    label: 'Admin',
    value: 'admin',
  },
  {
    label: 'Editor',
    value: 'editor',
  },
  {
    label: 'Guest',
    value: 'guest',
  },
]

export const userName: Field = {
  type: 'row',
  fields: [firstName, lastName],
}

export const userRole: Field = {
  type: 'select',
  name: 'role',
  options: userRoleOptions,
  defaultValue: 'editor',
}
