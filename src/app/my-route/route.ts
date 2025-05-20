import { payload } from '@/lib/utils'

export const GET = async () => {
  const data = await payload.find({
    collection: 'users',
  })

  return Response.json(data)
}
