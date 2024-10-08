import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'novaTarefa',

  projectId: 'x773em7k',
  dataset: 'prodiction',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
