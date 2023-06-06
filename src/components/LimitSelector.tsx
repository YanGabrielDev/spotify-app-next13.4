interface LimitSelectorProps{
    limitTracks: number,
    getTopTracksOfLimit: (newLimit: number) => void
}
export const LimitSelector = ({getTopTracksOfLimit, limitTracks}: LimitSelectorProps) => {
    return(
        <div className="w-full flex justify-center pt-8 xs:text-base text-sm">
        <span
          className={`px-4 ${limitTracks === 5 && "selectedTime"}`}
          onClick={() => getTopTracksOfLimit(5)}
        >
          Top 5
        </span>
        <span
          className={`px-4 ${
            limitTracks === 10 &&  "selectedTime"
          }`}
          onClick={() => getTopTracksOfLimit(10)}
        >
          Top 10
        </span>
      </div>
    )
}