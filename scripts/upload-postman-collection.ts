import fetch from 'node-fetch'
import fs from 'fs'

const key = process.env.POSTMAN_API_KEY
const collectionId = process.env.POSTMAN_COLLECTION_ID;
if (!key) throw new Error('Missing environment variable: POSTMAN_API_KEY')
if (!collectionId) throw new Error('Missing environment variable: POSTMAN_COLLECTION_ID')

const collection = fs.readFileSync('packages/postman/generated/postman-collection.json', 'utf-8');

if (!collection) throw new Error('Missing postman collection');


async function uploadCollection() {
    const res = await fetch(`https://api.getpostman.com/collections/${collectionId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': key
        },
        body: JSON.stringify({ body: collection })
    })
    if (res.status >= 400) {
        throw new Error(await res.text())
    }

    console.log('Uploaded', (await res.json()))
}
