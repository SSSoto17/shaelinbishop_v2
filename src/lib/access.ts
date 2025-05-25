import { Access } from 'payload'

export const canRead: Access = ({ req: { user } }) => {
  console.log(user)
  if (user?.role === 'Admin' || user?.role === 'Editor') {
    return true
  }

  return {
    _status: {
      equals: 'published',
    },
  }
}
