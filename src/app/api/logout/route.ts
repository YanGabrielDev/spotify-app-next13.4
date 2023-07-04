import { NextApiRequest } from "next"

export async function POST(request: NextApiRequest) {
    const token = request.body.token
    const clientId = request.body.client_id
    const clientSecret = request.body.client_secret
     await fetch("https://accounts.spotify.com/api/revoke",{
            method: 'POST',
            body: 'token=' + token + '&client_id=' + clientId + '&client_secret=' + clientSecret,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
    
}
