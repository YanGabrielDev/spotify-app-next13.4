"use client";

import SpotifyIcon from "@/icons/SpotifyIcon";
import { Button } from "./Button";

export const AuthButton = () => {
  async function handleLogin(){
    await fetch("api/auth")
  }
   
  return (
    <Button
      className="bg-green-100"
      text="Conectar-se"
      onClick={() => handleLogin()}
      icon={<SpotifyIcon width="25" height="25" fill="#000" />}
    />
  );
};
