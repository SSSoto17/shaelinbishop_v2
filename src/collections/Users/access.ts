import { Access, FieldAccess } from 'payload'

// ADMIN
export const isAdmin: Access = ({ req: { user } }) => {
  return Boolean(user?.role === 'Admin')
}

export const isAdminFieldLevel: FieldAccess = ({ req: { user } }) => {
  return Boolean(user?.role === 'Admin')
}

// ADMIN OR SELF
export const isAdminOrSelf: Access = ({ req: { user } }) => {
  // Logged in?
  if (user) {
    // Is admin?
    if (user?.role === 'Admin') {
      return true
    }

    // All others gain access to themselves
    return {
      id: {
        equals: user.id,
      },
    }
  }

  return false
}

// ADMIN OR EDITOR
export const isAdminOrEditor: Access = ({ req: { user } }) => {
  if (user?.role === 'Admin' || user?.role === 'Editor') {
    return true
  }
  return false
}

// USER
export const isUser: Access = ({ req: { user } }) => Boolean(user)

// ANYONE
export const isPublic: Access = () => true
