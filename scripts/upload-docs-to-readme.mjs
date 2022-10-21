#!/usr/bin/env node

import fetch from 'node-fetch'
import fs from 'fs'

const key = process.env.README_API_KEY
if (!key) throw new Error('Missing environment variable: README_API_KEY')

// Readme version of the site to publish to
const readmeVersion = 'v2.0'

// ID of the Miro REST API Clients category for the guides
const categoryId = '634e7912341d20002648ef06'

async function updateDoc(slug, title, category, file) {
  const res = await fetch(`https://dash.readme.com/api/v1/docs/${slug}`, {
    method: 'PUT',
    headers: {
      'x-readme-version': readmeVersion,
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(key, 'utf-8').toString('base64')}`
    },
    body: JSON.stringify({ title, category, body: fs.readFileSync(file, 'utf-8') })
  })
  if (res.status >= 400) {
    throw new Error(await res.text())
  }

  console.log('Uploaded', (await res.json()))
}

await updateDoc(
  'miro-nodejs-readme',
  'Node.js Api Client',
  categoryId,
  './packages/miro-api/README.md'
)

await updateDoc(
  'miro-nodejs-quickstart',
  'Miro Node.js client quickstart guide (Automation use case)',
  categoryId,
  'packages/miro-api/docs/quickstart.md'
)

await updateDoc(
  'miro-nodejs-quickstart-with-oauth-and-express',
  'Miro Node.js client quickstart guide (Using OAuth 2.0 and Express framework)',
  categoryId,
  'packages/miro-api/docs/quickstart-auth.md'
)


await updateDoc(
  'miro-nodejs-implement-storage-for-data-persistence',
  'Storage implementation',
  categoryId,
  'packages/miro-api/docs/implement-storage.md'
)
