import { Layout } from '@/components/Container/layout'
import { Tab, TabsField } from 'payload'
import { FlexConfiguration } from '../flexBlock'

const Mobile: Tab = {
  name: 'mobile',
  fields: [Layout],
}

const Tablet: Tab = {
  name: 'tablet',
  fields: [FlexConfiguration],
}

const Desktop: Tab = {
  name: 'desktop',
  fields: [FlexConfiguration],
}

export const ResponsivityTabs: TabsField = {
  type: 'tabs',
  tabs: [Mobile, Tablet, Desktop],
}
