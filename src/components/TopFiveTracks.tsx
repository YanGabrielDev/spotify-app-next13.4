
export interface CardTracksProps {
  id: string;
  positionTrack: number;
  trackName: string;
  trackImage: string;
  artistName: string;
}
export const TopFiveTracks = ({
  artistName,
  id,
  positionTrack,
  trackImage,
  trackName,
}: CardTracksProps) => {
  const maxCharaters = 15
  const fromatTrackName = trackName.length > maxCharaters ? `${trackName.substring(0,maxCharaters)}...`
: trackName
  return (
    <div key={id} className="flex items-center mb-4 w-full">
      <span className="text-[20px] xs:text-3xl w-10 text-center">{positionTrack + 1}</span>
      <div className='flex w-full'>
      <img className="h-20 ml-4 mr-4 cardImage" alt={artistName} src={trackImage} />
      </div>
      <div className="flex flex-col w-full">
        <span className="sm:text-base text-sm">{fromatTrackName}</span>
        <span className="sm:text-base text-sm">{artistName}</span>
      </div>
    </div>
  );
};
