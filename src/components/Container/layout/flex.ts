import { CheckboxField, OptionObject, RowField, SelectField } from 'payload'

const FlexRow: OptionObject = {
  label: 'Horizontal',
  value: 'flex-row',
}

const FlexCol: OptionObject = {
  label: 'Vertical',
  value: 'flex-col',
}

const FlexDirection: SelectField = {
  name: 'flexDirection',
  type: 'select',
  options: [
    FlexRow,
    FlexCol,
  ],
  admin: {
    placeholder: 'Horizontal',
    style: { maxWidth: '200px' },
  },
}

const FlexReverse: CheckboxField = {
  name: 'isReversed',
  label: 'Reverse?',
  type: 'checkbox',
  admin: {
    style: { alignSelf: 'end', flex: '0 1 auto' },
  },
}

const FlexWrap: CheckboxField = {
  name: 'isWrapped',
  label: 'Wrap?',
  type: 'checkbox',
  admin: {
    style: { alignSelf: 'end', flex: '0 1 auto' },
  },
}

export const FlexOptions: RowField = {
  type: 'row',
  fields: [FlexDirection, FlexReverse, FlexWrap],
  admin: {
    condition: (data, { type }) => type === 'flex',
  },
}
