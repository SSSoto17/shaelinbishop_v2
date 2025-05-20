import { headers as getHeaders, draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { payload } from '@/lib/utils'

export async function GET(
  req: { cookies: { get: (name: string) => { value: string } } } & Request,
): Promise<Response> {
  const draft = await draftMode()
  const headers = await getHeaders()

  const status403 = 'Please log in to preview this page'

  const { searchParams } = new URL(req.url)

  const page = searchParams.get('direct') || searchParams.get('live')
  const previewSecret = searchParams.get('secret')

  if (previewSecret !== process.env.PREVIEW_SECRET) {
    draft.disable()
    return new Response(status403, { status: 403 })
  }

  if (!page) {
    draft.disable()
    return new Response('Not found', { status: 404 })
  }

  let user

  try {
    user = await payload.auth({ headers }).then((data) => data.user)
  } catch (error) {
    console.error(error)
    return new Response(status403, {
      status: 403,
    })
  }

  if (!user) {
    draft.disable()
    return new Response(status403, {
      status: 403,
    })
  }

  draft.enable()

  redirect(page)
}
