import express from 'express'
import {MiroApi} from '@mirohq/miro-node'

const CLIENT_ID = 3458764532875095934
const CLIENT_SECRET = 'SgoAjkPYfF9NaHcVRevnY6GYwzfjtgtU'
const BOARD_ID = 'uXjVPZcwwIY='
const REDIRECT_URI = 'https://good-islands-smash-208-127-180-6.loca.lt'

const app = express()
/*
Access token: eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_2pV0kOo8ZiCWbEiwKdtAPdENyqw
Refresh token: eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_GvQ_vgAgVyTJrovpuw4AlMD6k2A
* */

// Require Axios for handling HTTP requests to Miro /oauth and Miro API endpoints
import axios from 'axios'

app.get('/', (req, res) => {
  let access_token
  let refresh_token

  if (req.query.code) {
    let url = `https://api.miro.com/v1/oauth/token?grant_type=authorization_code&client_id=3458764532875095934&client_secret=SgoAjkPYfF9NaHcVRevnY6GYwzfjtgtU&code=${req.query.code}&redirect_uri=${REDIRECT_URI}`

    async function grabToken() {
      try {
        let oauthResponse = await axios.post(url)

        // Console log access_token and reference_token:
        console.log(`access_token: ${oauthResponse.data.access_token}`)
        console.log(`refresh_token: ${oauthResponse.data.refresh_token}`)

        // Set global variable for access_token and refresh_token values
        access_token = oauthResponse.data.access_token
        refresh_token = oauthResponse.data.refresh_token

        // Specify Miro API request URL
        let requestUrl = `https://api.miro.com/v2/boards/${BOARD_ID}`

        if (access_token) {
          async function callMiro() {
            console.log('Call miro')
            // const Miro = new MiroApi(access_token)
            // const boards = Miro.getBoards()
            //
            // console.log(boards)
          }
          callMiro()

          //Function to refresh access_token and refresh_token pair
          async function refreshToken() {
            try {
              // Declare request URL for refresh_token flow
              let refreshUrl = `https://api.miro.com/v1/oauth/token?grant_type=refresh_token&client_id=3458764532875095934&client_secret=SgoAjkPYfF9NaHcVRevnY6GYwzfjtgtU&refresh_token=${refresh_token}`

              // Make request to Miro OAuth endpoint with grant_type = refresh_token
              let oauthRefreshResponse = await axios.post(refreshUrl)

              console.log(`New access_token: ${oauthRefreshResponse.data.access_token}`)
              console.log(`New refresh_token: ${oauthRefreshResponse.data.refresh_token}`)
            } catch (err) {
              console.log(`refreshToken ERROR: ${err}`)
            }
          }
          refreshToken()
        }
      } catch (err) {
        console.log(`global ERROR: ${err}`)
      }
    }
    return grabToken()
  }

  res.redirect(
    'https://miro.com/oauth/authorize?response_type=code&client_id=3458764532875095934&redirect_uri=' + REDIRECT_URI,
  )
})
// Run express server on localhost:3000

app.listen(3000, () => console.log(`Listening on localhost, port 3000`))
