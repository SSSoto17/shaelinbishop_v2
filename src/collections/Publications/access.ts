import { checkRole, isAdmin, isGuest } from '@/lib/access'
import { Access } from 'payload'

// UPDATE
export const canUpdate: Access = ({ req: { user } }) => {
  if (user?.role) {
    if (checkRole(user.role, isGuest)) {
      return {
        id: {
          in: user.pubAccess,
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
          in: user.pubAccess,
        },
      }
    }
  }
  return false
}
