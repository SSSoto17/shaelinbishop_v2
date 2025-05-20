import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { RichText as Converter } from '@payloadcms/richtext-lexical/react'

export const RichText = ({
  data,
  className,
}: {
  data: SerializedEditorState
  className: string | undefined
}) => {
  return <Converter data={data} className={className} />
}
