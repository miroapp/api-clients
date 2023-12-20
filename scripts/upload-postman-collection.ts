import fetch from 'node-fetch'
import fs from 'fs'

const key = process.env.POSTMAN_API_KEY
const collectionId = process.env.POSTMAN_COLLECTION_ID;
if (!key) throw new Error('Missing environment variable: POSTMAN_API_KEY')
if (!collectionId) throw new Error('Missing environment variable: POSTMAN_COLLECTION_ID')

const collection = fs.readFileSync('packages/postman/generated/postman-collection.json', 'utf-8');

if (!collection) throw new Error('Missing postman collection');


async function uploadCollection() {

    const config = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: collection })
    };

    config.headers['X-API-Key'] = key;
    const res = await fetch(`https://api.getpostman.com/collections/${collectionId}`, config);
    if (res.status >= 400) {
        const error = await res.text();
        throw new Error(error)
    }

    const response = await res.json();
    console.log('Uploaded', response);
}
uploadCollection();
