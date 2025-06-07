import { Components } from '@/components'
import { Block } from 'payload'
import { Background } from '../background'
import { Gap } from '../gap'
import { Padding } from '../padding'

export const GridBlock: Block = {
  slug: 'grid',
  fields: [
    Background,
    Padding,
    {
      name: 'sections',
      type: 'select',
      options: [
        { label: 'Single', value: 'colFull' },
        { label: '1/2 - Two columns', value: 'col2' },
        { label: '1/3 - Three columns', value: 'col3' },
        { label: '1/4 - Four columns', value: 'col4' },
        { label: '1/6 - Six columns', value: 'col6' },
      ],
      defaultValue: 'colFull',
      admin: {
        isClearable: false,
      },
    },
    Gap,
    Components,
  ],
}
