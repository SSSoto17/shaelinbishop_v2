// Admins have full access
// Editors have full access, except for deleting docs
// Guests have full acces to docs within their siteAcess, otherwise they can only read
// Anyone else can only read published docs

import { Access } from 'payload'

import { checkRole, isAdmin, isGuest, isUser } from '@/lib/access'

// READ
export const canRead: Access = ({ req: { user } }) => {
  if (user?.role && checkRole(user.role, isUser)) {
    return true
  }

  return {
    _status: { equals: 'published' },
  }
}

// CREATE
export const canCreate: Access = ({ req: { user } }) => {
  if (user?.role && checkRole(user.role, isUser)) {
    return true
  }

  return false
}

// UPDATE
export const canUpdate: Access = ({ req: { user } }) => {
  if (user?.role) {
    if (checkRole(user.role, isGuest)) {
      return {
        id: {
          in: user.siteAccess,
        },
      }
    }

    return true
  }

  return false
}

// DELETE
export const canDelete: Access = ({ req: { user } }) => {
  if (user?.role) {
    if (checkRole(user.role, isAdmin)) {
      return true
    }

    if (checkRole(user.role, isGuest)) {
      // can only delete pages in their site access
      return {
        id: {
          in: user.siteAccess,
        },
      }
    }
  }
  return false
}
