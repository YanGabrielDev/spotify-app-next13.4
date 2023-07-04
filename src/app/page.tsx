import { AuthButton } from "@/components/AuthButton";

export default function Home() {

  return (
    <div className="h-screen w-full bg-no-repeat bg-center bg-cover bg-[url('/images/photo.avif')]">
      <div className="absolute h-screen w-full backdrop-brightness-50">
        <div
          className="mt-20 w-full flex items-center flex-col 
          sm:text-xl sm:px-18 md:px-12 animate-[wiggle_1s_ease]"
        >
          <h1
            className={`text-white md:text-6xl sm:text-5xl xs:text-3xl text-2xl`}
          >
            Your Spotify Tracks
          </h1>
        </div>
        <div
          className="w-full px-12 flex items-center 
          flex-col xs:px-16 md:px-36 animate-[wiggle_1s_ease]"
        >
          <div className="text-white text-center mt-10 xs:text-sm md:text-base text-xs max-w-md">
            <h2>
              Você é um amante da música e adora acompanhar as suas tracks
              favoritas no Spotify?
            </h2>
            <h3 className="text-white mt-6">
              Então não perca mais tempo! Faça login agora no nosso site e
              descubra os seus status recentes no Spotify.{" "}
            </h3>
          </div>
        </div>
        <div className="w-full mt-10 flex items-center justify-center animate-[wiggle_1s_ease]">
          <AuthButton />
        </div>
      </div>
    </div>
  );
}
