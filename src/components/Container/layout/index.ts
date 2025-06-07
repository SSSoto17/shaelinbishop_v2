import { Field, GroupField, OptionObject, SelectField } from 'payload'

const TypeBlock: OptionObject = {
  label: 'Default',
  value: 'block',
}

const TypeGrid: OptionObject = {
  label: 'Grid',
  value: 'grid',
}

const TypeFlex: OptionObject = {
  label: 'Flex',
  value: 'flex',
}

const Type: SelectField = {
  name: 'layoutType',
  label: 'Choose container type:',
  type: 'select',
  options: [TypeBlock, TypeGrid, TypeFlex],
  admin: {
    isClearable: false,
  },
}

const FlexRow: OptionObject = {
  label: 'Horizontal',
  value: 'flexRow',
}

const FlexCol: OptionObject = {
  label: 'Vertical',
  value: 'flexCol',
}

const GridSingleCol: OptionObject = {
  label: 'Single - 1 column',
  value: 'gridSingle',
}

const LayoutConfiguration: Field = {
  name: 'layoutOptions',
  label: false,
  type: 'select',
  options: [
    FlexRow,
    FlexCol,
    GridSingleCol,
  ],
  admin: {
    condition: (data, { layoutType }) => {
      return layoutType !== 'block'
    },
    isClearable: false,
    style: { maxWidth: '50%' },
  },
  defaultValue: 'flexRow',
}

export const Layout: GroupField = {
  name: 'layout',
  type: 'group',
  fields: [
    Type,
    LayoutConfiguration,
  ],
}
