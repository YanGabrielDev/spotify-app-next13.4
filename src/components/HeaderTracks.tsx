interface HeaderTracksProps{
    text: string
}
export const HeaderTracks = ({text}: HeaderTracksProps) => {
  return (
    <div className="w-full flex justify-center text-[1rem] sm:text-2xl">
      <h3 className="mb-4"> My Top {text} Tracks</h3>
    </div>
  );
};
