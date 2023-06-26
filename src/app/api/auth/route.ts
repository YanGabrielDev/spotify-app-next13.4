import { NextApiRequest } from "next"
import { redirect } from "next/navigation";

export async function GET(request: NextApiRequest) {
        const client_id = process.env.NEXT_PUBLIC_CIENT_ID;
        const redirect_uri = "http://localhost:3000/TopTracks";
        const scope = "user-top-read";
        const link = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`;
        redirect(link)
      
}
