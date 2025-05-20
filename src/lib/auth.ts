import { headers as getHeaders } from 'next/headers'
import { payload } from './utils'

export const checkAuth = async () => {
  const headers = await getHeaders()
  const { user } = await payload.auth({ headers })

  return user
}
