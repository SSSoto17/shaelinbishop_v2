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
export const AdminOrEditor: Access = ({ req: { user } }) => {
  if (user?.role === 'Admin' || user?.role === 'Editor') {
    return true
  }
  return false
}

// READ ACCESS
export const canRead: Access = ({ req: { user } }) => {
  // IF ADMIN OR EDITOR
  if (user?.role === 'Admin' || user?.role === 'Editor') {
    return true
  }
  //   if (user) {

  //     if (user?.siteAccess && user?.siteAccess.length > 0) {
  //       // IF USER HAS ACCESS OR STATUS = PUBLISHED
  //       const ids = user?.siteAccess?.map(({ value }) => {
  //         return value.id
  //       })

  //       return {
  //         or: [
  //           {
  //             id: {
  //               in: ids,
  //             },
  //           },
  //           {
  //             _status: {
  //               equals: 'published',
  //             },
  //           },
  //         ],
  //       }
  //     }
  //   }

  //   LOGGED OUT + IF STATUS = PUBLISHED
  return {
    _status: {
      equals: 'published',
    },
  }
}

// HAS SITE ACCESS
export const hasAccess: Access = ({ req: { user } }) => {
  if (user?.role === 'Admin' || user?.role === 'Editor') {
    return true
  }
  return {
    _status: {
      equals: 'published',
    },
  }
}
