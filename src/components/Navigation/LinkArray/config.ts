import { Field } from 'payload'

// Link label
// Ability to hide label -> generate aria label
// Link icon
// Link type (internal or external)
// Link type: internal -> Target type (page, publication, document fragment)
// Link type: external -> URL

// INTERNAL
// Target type: page -> relationship to pages
// Target type: publication -> relationship to publications + hidden field with slug /categoryName
// Target type: document fragment -> relationship to pages + text field to add #section (which should be linked up with component block names?)

// EXTERNAL
// URL -> Target type (default _self, open in new tab _blank)

// LINK LABEL
const LinkLabel: Field = {
  name: 'label',
  type: 'text',
}

// HIDDEN LABEL
const HideLabel: Field = {
  name: 'displayLabel',
  label: 'Hide label?',
  type: 'checkbox',
  defaultValue: false,
  hooks: {
    afterChange: [
      async () => {
        // add hook to update dynamic aria-label if true
      },
    ],
  },
}

const ReadAriaLabel: Field = {
  // Hidden aria-label for accessibility
  name: 'ariaLabel',
  type: 'text',
  required: true,
  admin: {
    hidden: true,
    condition: (data, { siblingData: { displayLabel } }) => {
      return Boolean(displayLabel)
    },
  },
}

// ICON
const LinkIcon: Field = {
  name: 'linkIcon',
  type: 'upload',
  relationTo: 'icons',
  // might add field in layout section to customize appearance of icons
  // might change to a custom component icon picker
  // or add option to upload or pick icon
}

// LINK TYPE
const LinkType: Field = {
  name: 'linkType',
  type: 'select',
  options: [
    'Internal',
    'External',
  ],
  defaultValue: 'Internal',
}

// LINK TYPE: INTERNAL -> PAGE / PAGE SECTION
const TargetPage: Field = {
  name: 'targetPage',
  type: 'relationship',
  relationTo: 'pages',
  required: true,
  admin: {
    condition: (data, { siblingData: { targetType } }) => {
      return targetType === 'Page' || targetType === 'Page section'
    },
  },
}

// LINK TYPE: INTERNAL -> PAGE SECTION -> add #section to slug
const TargetSection: Field = {
  name: 'targetSection',
  type: 'text',
  required: true,
  admin: {
    condition: (data, { siblingData: { targetType } }) => {
      return targetType === 'Page section'
    },
  },
  // Link to section block names?)
  // If linked to block names...
  // Field should be a select field
  // Create a hook that will query the page selected in targetPage
  // Then populate the options with the blockNames from the targetPage
  // Update all component blocks to have an id with the dynamic blockName
}

// LINK TYPE: INTERNAL -> PUBLICATION
const TargetPublication: Field = {
  name: 'targetPublication',
  type: 'relationship',
  relationTo: 'publications',
  required: true,
  admin: {
    condition: (data, { siblingData: { targetType } }) => {
      return targetType === 'Publication'
    },
  },
  hooks: {
    afterChange: [
      async () => {
        // If publication is a book or a collection
        // Find category name
        // Update readPublicationSlug with /categoryName
        // If publication is short fiction or poetry
        // Update readPublicationSlug with /work#categoryName
        // In the future, could look through the publications publications-array to find the first relevant link (lit mag or collection)
      },
    ],
  },
}
// LINK TYPE: INTERNAL -> PUBLICATION -> add /categoryName to slug
const TargetCategorySlug: Field = {
  name: 'readPublicationSlug',
  type: 'text',
  access: {
    read: () => true,
    update: ({ req: { user } }) => {
      return Boolean(user)
    },
  },
  admin: { hidden: true },
  defaultValue: '/books',
}

// LINK TYPE: INTERNAL
const InternalTargetOptions = [
  'Page',
  'Page section',
  'Publication',
]

const InternalTargetType: Field = {
  name: 'targetType',
  label: 'Choose target',
  type: 'select',
  options: InternalTargetOptions,
}

const LinkInternal: Field = {
  name: 'internalLink',
  type: 'group',
  admin: {
    condition: (data, { siblingData: { linkType } }) => {
      return linkType === 'Internal'
    },
  },
  fields: [
    InternalTargetType,
    TargetPage,
    TargetSection,
    TargetPublication,
    TargetCategorySlug,
  ],
}

// LINK TYPE: EXTERNAL
const ExternalURL: Field = {
  name: 'URL',
  type: 'text',
  required: true,
}

const ExternalTargetTypeOptions = [
  {
    label: 'Default',
    value: '_self',
  },
  {
    label: 'Open in new tab',
    value: '_blank',
  },
]

const ExternalTargetType: Field = {
  name: 'targetType',
  label: 'Behavior',
  type: 'select',
  options: ExternalTargetTypeOptions,
}

const LinkExternal: Field = {
  type: 'row',
  admin: {
    condition: (data, { siblingData: { linkType } }) => {
      return linkType === 'External'
    },
  },
  fields: [
    ExternalURL,
    ExternalTargetType,
  ],
}

export const LinkItems: Field = {
  name: 'items',
  type: 'array',
  required: true,
  maxRows: 6,
  fields: [
    LinkLabel,
    HideLabel,
    ReadAriaLabel,
    LinkIcon,
    LinkType,
    LinkInternal,
    LinkExternal,
  ],
}
