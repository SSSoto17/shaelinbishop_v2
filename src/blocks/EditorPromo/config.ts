import { Block } from 'payload'

export const EditorPromo: Block = {
  slug: 'editorPromo',
  fields: [
    {
      name: 'img',
      label: 'Image',
      type: 'upload',
      relationTo: 'images',
    },
  ],
}
