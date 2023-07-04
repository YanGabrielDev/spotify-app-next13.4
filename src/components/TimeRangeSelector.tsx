export type TimeRange = "long_term" | "short_term" | "medium_term"

export interface TimeRangeSelectorProps{
    typeTime: string,
    getTopTracksOfTimeRange: (newTimeRange: TimeRange) => void
}
export const TimeRangeSelector = ({getTopTracksOfTimeRange, typeTime}: TimeRangeSelectorProps) =>{
    return(
        <div className="w-full flex justify-center pt-8 mb-4 xs:text-base text-sm">
              <span
                className={`px-4 ${typeTime === "long_term" && "selectedTime"}`}
                onClick={() => getTopTracksOfTimeRange("long_term")}
              >
                All time
              </span>
              <span
                className={`px-4 ${
                  typeTime === "short_term" && "selectedTime"
                }`}
                onClick={() => getTopTracksOfTimeRange("short_term")}
              >
                Weekend
              </span>
              <span
                className={`px-4 ${
                  typeTime === "medium_term" && "selectedTime"
                }`}
                onClick={() => getTopTracksOfTimeRange("medium_term")}
              >
                Mouth
              </span>
            </div>
    )
}