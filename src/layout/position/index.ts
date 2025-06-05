import { OptionObject, RowField, SelectField } from 'payload'

const Full: OptionObject = { label: 'Full width - 100%', value: 'colSpanFull' }
const Half: OptionObject = { label: '1/2 - 50%', value: 'colSpan6' }
const Third: OptionObject = { label: '1/3 - 33%', value: 'colSpan4' }
const TwoThirds: OptionObject = { label: '2/3 - 66%', value: 'colSpan8' }
const Quarter: OptionObject = { label: '1/4 - 25%', value: 'colSpan3' }
const ThreeQuarters: OptionObject = { label: '3/4 - 75%', value: 'colSpan9' }
const Sixth: OptionObject = { label: '1/6 - 16%', value: 'colSpan2' }
const FiveSixths: OptionObject = { label: '5/6 - 83%', value: 'colSpan10' }

export const Halves: SelectField = {
  name: 'position_halves',
  label: 'Position',
  type: 'select',
  options: [
    Full,
    Half,
  ],
  defaultValue: 'colSpan6',
  admin: {
    isClearable: false,
    condition: ({ layoutSections }, siblingData, { path }) => {
      return layoutSections[path[1]].sections === 'col2'
    },
  },
}

const Thirds: SelectField = {
  name: 'position_thirds',
  label: 'Position',
  type: 'select',
  options: [
    Full,
    Third,
    TwoThirds,
  ],
  defaultValue: 'colSpan4',
  admin: {
    isClearable: false,
    condition: ({ layoutSections }, siblingData, { path }) => {
      return layoutSections[path[1]].sections === 'col3'
    },
  },
}

const Quarters: SelectField = {
  name: 'position_quarters',
  label: 'Position',
  type: 'select',
  options: [
    Full,
    Half,
    Quarter,
    ThreeQuarters,
  ],
  defaultValue: 'colSpan3',
  admin: {
    isClearable: false,
    condition: ({ layoutSections }, siblingData, { path }) => {
      return layoutSections[path[1]].sections === 'col4'
    },
  },
}
const Sixths: SelectField = {
  name: 'position_sixths',
  label: 'Position',
  type: 'select',
  options: [
    Full,
    Half,
    Third,
    TwoThirds,
    Sixth,
    FiveSixths,
  ],
  defaultValue: 'colSpan2',
  admin: {
    isClearable: false,
    condition: ({ layoutSections }, siblingData, { path }) => {
      return layoutSections[path[1]].sections === 'col6'
    },
  },
}

export const Position: RowField = {
  type: 'row',
  fields: [
    {
      name: 'position',
      type: 'text',
      admin: { hidden: true },
      hooks: {
        afterRead: [
          ({
            data,
            siblingData: { position_halves, position_thirds, position_quarters, position_sixths },
            path,
          }) => {
            if (data?.[path[0]][path[1]].sections === 'colFull') return 'colSpanFull'
            if (data?.[path[0]][path[1]].sections === 'col2') return position_halves
            if (data?.[path[0]][path[1]].sections === 'col3') return position_thirds
            if (data?.[path[0]][path[1]].sections === 'col4') return position_quarters
            if (data?.[path[0]][path[1]].sections === 'col6') return position_sixths
            return 'colSpanFull'
          },
        ],
      },
    },
    Halves,
    Thirds,
    Quarters,
    Sixths,
  ],
}
