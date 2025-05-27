export const isUser = ['Admin', 'Editor', 'Guest']
export const isAdminOrEditor = ['Admin', 'Editor']
export const isAdmin = ['Admin']
export const isGuest = ['Guest']

export function checkRole(role: string, allowedRoles: Array<string>) {
  if (allowedRoles.includes(role)) {
    return true
  } else {
    return false
  }
}
