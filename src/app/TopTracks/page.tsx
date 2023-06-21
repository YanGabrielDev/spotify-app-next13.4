'use client'
import { TopFiveTracks } from "@/components/TopFiveTracks";
import { Loader } from "@/icons/Loader";
import {Logo } from "../../icons/Logo";
import { useState, useEffect, useRef } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import SpotifyIcon from "@/icons/SpotifyIcon";
import { LimitSelector } from "@/components/LimitSelector";
import { TimeRangeSelector, TimeRange } from "@/components/TimeRangeSelector";
import { HeaderTracks } from "@/components/HeaderTracks";
import { PrintContainer } from "@/components/PrintContainer";
import { Button } from "@/components/Button";
import Exit from "@/icons/Exit";

function TopTracks() {
  const domEl = useRef<HTMLDivElement>(null);
  const [tracks, setTracks] = useState<SpotifyApi.TrackObjectFull[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [typeTime, setTypeTime] = useState<TimeRange>("long_term");
  const [limitTracks, setLimitTracks] = useState<number>(5)

  const spotifyApi = new SpotifyWebApi();


  const showTypeTime = (typeTime: TimeRange): string => {
    switch(typeTime) {
      case "long_term":
        return "All Time";
      case "short_term":
        return "Weekend";
      case "medium_term":
        return "Mouth";
      default:
        return "";
    }
  };

  //Chama a request tracks
  const getTopTracks = (
    timeRange: TimeRange, limit: number
  ) => {
    setTypeTime;
    spotifyApi
      .getMyTopTracks({ time_range: timeRange, limit: limit })
      .then((response) => {
        setTracks(response.items);
        setIsloading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //Obtem o token na url e chama a request
  useEffect(() => {
      const params = new URLSearchParams(window.location.hash.replace("#", "?"));
      const accessToken = params.get("access_token");
    if (accessToken) {
      spotifyApi.setAccessToken(accessToken);
      getTopTracks("long_term", limitTracks);
    }
  }, []);

  const getTopTracksOfLimit = (newLimit: number) => {
    setLimitTracks(newLimit)
    getTopTracks(typeTime, newLimit)
  }

  const getTopTracksOfTimeRange = (newTimeRange: TimeRange) => {
    setTypeTime(newTimeRange)
    getTopTracks(newTimeRange, limitTracks)
  }

 function logout(){
  spotifyApi.setAccessToken(null)
  const accessToken =  spotifyApi.getAccessToken()
  if (accessToken === null){
    window.location.href = "/"
  }
}
  return (
      <div className="flex flex-col items-center text-white h-full bg-black py-4">
        <div className='flex w-full justify-end pt-3 pr-3'>
         <Button className="bg-green-100" onClick={() => logout()} icon={<Exit height='20' width='20'/>} text='sair'/>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
           <LimitSelector getTopTracksOfLimit={getTopTracksOfLimit} limitTracks={limitTracks}/>
            <TimeRangeSelector getTopTracksOfTimeRange={getTopTracksOfTimeRange} typeTime={typeTime}/>
            <PrintContainer domEl={domEl}>
             <HeaderTracks text={showTypeTime(typeTime)} />
              {tracks.map((tracks, index) => (
                <>
                  <TopFiveTracks
                    id={tracks.id}
                    artistName={tracks.artists[0].name}
                    trackName={tracks.name}
                    positionTrack={index}
                    trackImage={tracks.album.images[0].url}
                    key={tracks.id}
                  />
                </>
              ))}
              <div className="w-full flex justify-center text-2xl">
              <SpotifyIcon width="35" height="35" fill="#fff" />
              <span className="ml-2"> Spotify</span>
              </div>
            </PrintContainer>
          </>
        )}
      </div>
  );
}

export default TopTracks;