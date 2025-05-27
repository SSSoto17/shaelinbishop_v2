import type { Field } from 'payload'
import { isAdminFieldLevel } from './access'

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
    value: 'Admin',
  },
  {
    label: 'Editor',
    value: 'Editor',
  },
  {
    label: 'Guest',
    value: 'Guest',
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
  defaultValue: 'Editor',
  access: {
    create: isAdminFieldLevel,
    update: isAdminFieldLevel,
  },
}

export const siteAccess: Field = {
  name: 'siteAccess',
  saveToJWT: true,
  type: 'relationship',
  relationTo: 'pages',
  hasMany: true,
  access: {
    create: isAdminFieldLevel,
    update: isAdminFieldLevel,
  },
  admin: {
    condition: ({ role }) => role !== 'Admin',
    description: 'Allow editor access.',
  },
}

export const pubAccess: Field = {
  name: 'pubAccess',
  saveToJWT: true,
  type: 'relationship',
  relationTo: 'publications',
  hasMany: true,
  access: {
    create: isAdminFieldLevel,
    update: isAdminFieldLevel,
  },
  admin: {
    condition: ({ role }) => role !== 'Admin',
    description: 'Allow editor access.',
  },
}
