import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { RichText as Converter } from '@payloadcms/richtext-lexical/react'

export const RichText = ({
  data,
  className,
  disableContainer,
}: {
  data: SerializedEditorState
  className: string | undefined
  disableContainer: boolean
}) => {
  return <Converter data={data} className={className} disableContainer={disableContainer} />
}
