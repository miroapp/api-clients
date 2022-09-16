_This app is used to try out apis we develop. Its not meant for public release or to be any good_

# Development
Add your app ID and SECRET to a `.env` file in the root.


You need to visit the app through a [localtunnel](https://www.npmjs.com/package/localtunnel), since localhost doesnt work as a callback url for the authentication api.
Save that URL in the same `.env file`. You can pass a preferred localtunnel subdomain to the start command:

So lets say you want to have the subdomain: `mettins-node-test-app` 
```shell
npx localtunnel --port 3000 --subdomain mettins-node-test-app
```
This will forward your `http://localhost:3000` -> `https://mettins-node-test-app.loca.lt`. 

Add this url to your app in the Miro interface (Redirect URI for OAuth2.0): `https://YOUR_SUBDOMAIN.loca.lt/auth/miro/callback/`

Then, in another tab:
```shell
yarn && yarn dev
```

The server will auto-reload, the webpage will NOT.

