import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import { structure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'Alira Website Studio',

  projectId: 'k6bxd983',
  dataset: 'alira-studio',

  plugins: [structureTool({ structure })],

  schema: {
    types: schemaTypes,
  },
})
