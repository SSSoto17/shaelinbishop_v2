import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { RichText as Converter } from '@payloadcms/richtext-lexical/react'

export const RichText = ({
  body,
  data,
  className,
  disableContainer,
}: {
  body: SerializedEditorState
  data: SerializedEditorState
  className: string | undefined
  disableContainer: boolean
}) => {
  const style = [
    {
      name: 'paragraphSpace',
      css: '[>*+*]:',
    },
    {
      name: 'title',
    },
    {
      name: 'subtitle',
    },
    {
      name: 'links',
    },
  ]
  // return <Converter data={data} disableContainer={disableContainer} />
  return <Converter data={body || data} className={className} disableContainer={disableContainer} />
}
