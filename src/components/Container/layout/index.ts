import { OptionObject, SelectField, TabAsField } from 'payload'
import { FlexOptions } from './flex'
import { Gap } from './gap'
import { GridOptions } from './grid'

const TypeGrid: OptionObject = {
  label: 'Grid',
  value: 'grid',
}

const TypeFlex: OptionObject = {
  label: 'Flex',
  value: 'flex',
}

const Type: SelectField = {
  name: 'type',
  label: false,
  type: 'select',
  options: [TypeGrid, TypeFlex],
  admin: {
    placeholder: 'Default',
    style: { maxWidth: '520px' },
  },
}

export const Layout: TabAsField = {
  name: 'layout',
  type: 'tab',
  fields: [
    Type,
    FlexOptions,
    GridOptions,
    Gap,
  ],
}
