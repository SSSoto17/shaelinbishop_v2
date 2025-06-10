import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { RichText as Converter } from '@payloadcms/richtext-lexical/react'

export const RichText = ({
  body,
  data,
  gridPosition,
  spacing,
  className,
  disableContainer,
}: {
  body: SerializedEditorState
  data: SerializedEditorState
  className: string | undefined
  disableContainer: boolean
  gridPosition: { columns: string; rows: string }
  spacing: { margin: { value: string }; padding: { value: string } }
}) => {
  let style = `${className}`

  if (gridPosition) {
    const { columns, rows } = gridPosition
    const {
      margin: { value: margin },
      padding: { value: padding },
    } = spacing
    style = `${columns || ''} ${rows || ''} ${margin || ''} ${padding || ''} richText`
  }

  // return <Converter data={data} disableContainer={disableContainer} />
  return <Converter data={body || data} className={style} disableContainer={disableContainer} />
}
