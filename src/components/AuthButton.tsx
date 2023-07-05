"use client";

import SpotifyIcon from "@/icons/SpotifyIcon";
import { Button } from "./Button";

export const AuthButton = () => {
  async function handleLogin(){
    const client_id = process.env.NEXT_PUBLIC_CIENT_ID;
    const redirect_uri = "http://localhost:3000/TopTracks";
    const scope = "user-top-read";
    window.location.href = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`;
  }
   
  return (
    <Button
      className="bg-green-100 font-semibold"
      text="Conectar-se"
      onClick={() => handleLogin()}
      icon={<SpotifyIcon width="25" height="25" fill="#000" />}
    />
  );
};
