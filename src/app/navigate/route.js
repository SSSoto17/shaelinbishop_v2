import { revalidatePath } from 'next/cache'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request) {
  const draft = await draftMode()
  const { searchParams } = request.nextUrl
  const path = searchParams.get('path')

  draft.disable()
  revalidatePath(path)
  redirect(path)
}
