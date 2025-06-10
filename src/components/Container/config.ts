import { Block, CollapsibleField, RowField, SelectField, Tab, TabAsField, TabsField } from 'payload'
import { Components } from '..'
import { Background } from './background'
import { Layout } from './layout'
import { Spacing } from './spacing'

const FullBleed: SelectField = {
  name: 'sectionWidth',
  label: 'Width',
  type: 'select',
  options: ['Full', 'Content', 'Max width'],
  defaultValue: 'Content',
  admin: { isClearable: false, style: { maxWidth: '520px' } },
}

const ContainerWidth: RowField = {
  type: 'row',
  fields: [
    FullBleed,
    {
      name: 'maxWidth',
      label: 'Value',
      type: 'text',
      admin: {
        placeholder: 'Enter max width value (px, %, rem)',
        condition: (data, { sectionWidth }) => sectionWidth === 'Max width',
      },
    },
  ],
}

const Render: CollapsibleField = {
  label: 'Render element as...',
  type: 'collapsible',
  fields: [
    {
      name: 'as',
      label: false,
      type: 'radio',
      options: [
        { label: 'Div (default)', value: 'div' },
        { label: 'Section', value: 'section' },
        { label: 'Article', value: 'article' },
      ],
      defaultValue: 'div',
      admin: {
        description:
          "Choose which HTML-element to render the container as. If a top-level container, it's advisable to go with <section>. Nested containers work well as <article>. <div> elements are universal and work in most contexts, but provide poor readability for screen readers. For more info on HTML semantics and sectioning, go to https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#sectioning_content",
      },
    },
  ],
  admin: {
    initCollapsed: true,
    style: { maxWidth: '520px' },
  },
}

const General: TabAsField = {
  name: 'general',
  type: 'tab',
  fields: [
    Render,
    ContainerWidth,
    Spacing,
  ],
}

const Content: Tab = {
  label: 'Content',
  fields: [
    Components,
  ],
}

const Tabs: TabsField = {
  type: 'tabs',
  tabs: [
    General,
    Background,
    Layout,
    Content,
  ],
}

export const Container: Block = {
  slug: 'container',
  fields: [
    Tabs,
  ],
}
