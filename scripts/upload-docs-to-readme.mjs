#!/usr/bin/env node

import fetch from 'node-fetch'
import fs from 'fs'

const key = process.env.README_API_KEY
if (!key) throw new Error('Missing environment variable: README_API_KEY')

// Readme version of the site to publish to
const readmeVersion = '2-nodejs-test'

// ID of the Miro REST API Clients category for the guides
const categoryId = '6334152e20e40f07e4f23e6b'

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
  console.log('Uploaded', (await res.json()).title)
}

await updateDoc(
  'node-api-client',
  'Node.js Api Client',
  categoryId,
  './packages/typescript-node/README.md'
)

await updateDoc(
  'get-started-with-nodejs-api-client',
  'Miro Node.js client quickstart guide (Automation use case)',
  categoryId,
  'packages/typescript-node/docs/quickstart.md'
)

await updateDoc(
  'authorization-quickstart',
  'Miro Node.js client quickstart guide (Using OAuth 2.0 and Express framework)',
  categoryId,
  'packages/typescript-node/docs/quickstart-auth.md'
)


await updateDoc(
  'storage-implementation',
  'Storage implementation',
  categoryId,
  'packages/typescript-node/docs/implementing-storage.md'
)
