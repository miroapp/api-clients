#!/usr/bin/env node

import fetch from 'node-fetch'
import fs from 'fs/promises'

const key = process.env.README_API_KEY
if (!key) throw new Error('Missing environment variable: README_API_KEY')

// Readme version of the site to publish to
const readmeVersion = 'v2.0'

// ID of the Miro REST API Clients category for the guides
const categoryId = '6628045c567473003e032e82'

const titlePattern = /^# (.*)/

async function updateDoc(slug, defaultTitle, category, file) {
  const fileContents = await fs.readFile(file, 'utf-8')

  const title = fileContents.match(titlePattern)?.[1] || defaultTitle
  const body = fileContents.replace(titlePattern, '').trim()

  const requestBody = { title, category, body }

  const res = await fetch(`https://dash.readme.com/api/v1/docs/${slug}`, {
    method: 'PUT',
    headers: {
      'x-readme-version': readmeVersion,
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(key, 'utf-8').toString('base64')}`
    },
    body: JSON.stringify(requestBody)
  })
  if (res.status >= 400) {
    throw new Error(await res.text())
  }

  console.log('Uploaded', (await res.json()))
}

await updateDoc(
  'miro-nodejs-readme',
  'Miro Node.js client Readme',
  categoryId,
  './packages/miro-api/README.md'
)

await updateDoc(
  'miro-nodejs-quickstart',
  'Miro Node.js client quickstart for task automation',
  categoryId,
  'packages/miro-api/docs/quickstart.md'
)

await updateDoc(
  'miro-nodejs-quickstart-with-oauth-and-express',
  'Miro Node.js client quickstart with OAuth and Express',
  categoryId,
  'packages/miro-api/docs/quickstart-auth.md'
)

await updateDoc(
  'miro-nodejs-implement-storage-for-data-persistence',
  'Implement data storage',
  categoryId,
  'packages/miro-api/docs/implement-storage.md'
)

await updateDoc(
  'miro-python-client',
  'Miro Python client',
  categoryId,
  './packages/miro-api-python/README.md'
)
