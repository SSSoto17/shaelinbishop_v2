import { GroupField, OptionObject, RowField, SelectField } from 'payload'

// COLUMNS
const Cols2: OptionObject = {
  label: '2',
  value: 'grid-cols-[repeat(auto-fill,_minmax(374px,_1fr))]',
}
const Cols3: OptionObject = {
  label: '3',
  value: 'grid-cols-[repeat(auto-fill,_minmax(324px,_1fr))]',
}
const Cols4: OptionObject = {
  label: '4',
  value: 'grid-cols-[repeat(auto-fill,_minmax(226px,_1fr))]',
}
const Cols6: OptionObject = {
  label: '6',
  value: 'grid-cols-[repeat(auto-fill,_minmax(164px,_1fr))]',
}

const ColumnOptions = [Cols2, Cols3, Cols4, Cols6]

// ROWS
const Rows2: OptionObject = { label: '2', value: 'grid-rows-2' }
const Rows3: OptionObject = { label: '3', value: 'grid-rows-3' }
const Rows4: OptionObject = { label: '3', value: 'grid-rows-4' }
const Rows5: OptionObject = { label: '3', value: 'grid-rows-5' }
const Rows6: OptionObject = { label: '3', value: 'grid-rows-6' }

const RowOptions = [Rows2, Rows3, Rows4, Rows5, Rows6]

// FIELDS
const GridColumns: SelectField = {
  name: 'gridColumns',
  label: 'Columns',
  type: 'select',
  options: ColumnOptions,
  admin: {
    placeholder: 'Single',
  },
}

const GridRows: SelectField = {
  name: 'gridRows',
  label: 'Rows',
  type: 'select',
  options: RowOptions,
  admin: {
    placeholder: 'Auto',
  },
}

export const GridOptions: RowField = {
  type: 'row',
  fields: [
    GridColumns,
    GridRows,
  ],
  admin: {
    condition: (data, { type }) => type === 'grid',
  },
}

// GRID CHILD OPTIONS

const ColPosOptions = [
  { label: 'Span 2', value: 'col-span-2' },
  { label: 'Span 3', value: 'col-span-3' },
  { label: 'Span 4', value: 'col-span-4' },
  { label: 'Span 5', value: 'col-span-5' },
  { label: 'Span 6', value: 'col-span-6' },
]

const ColPosition: SelectField = {
  name: 'columns',
  type: 'select',
  options: ColPosOptions,
  admin: {
    placeholder: 'Auto',
    style: { maxWidth: '520px' },
  },
}

const RowPosOptions = [
  { label: 'Span 2', value: 'row-span-2' },
  { label: 'Span 3', value: 'row-span-3' },
  { label: 'Span 4', value: 'row-span-4' },
  { label: 'Span 5', value: 'row-span-5' },
  { label: 'Span 6', value: 'row-span-6' },
]

const RowPosition: SelectField = {
  name: 'rows',
  type: 'select',
  options: RowPosOptions,
  admin: { placeholder: 'Auto', style: { maxWidth: '520px' } },
}

export const GridPosition: GroupField = {
  name: 'gridPosition',
  label: false,
  type: 'group',
  fields: [
    ColPosition,
    RowPosition,
  ],
  admin: {
    condition: ({ layoutSections }, siblingData, { path }) => {
      const layoutType = layoutSections[path[1]].layout.type

      return layoutType === 'grid'
    },
  },
}
