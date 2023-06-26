import { NextApiRequest } from "next"

export async function GET(request: NextApiRequest) {
    const token = request.query.token
    const clientId = request.query.client_id
    const clientSecret = request.query.client_secret

    async function logout(){
        const request = await fetch("https://accounts.spotify.com/api/revoke",{
            method: 'POST',
            body: 'token=' + token + '&client_id=' + clientId + '&client_secret=' + clientSecret,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
    }
    await logout()
}
