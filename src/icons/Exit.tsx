import { IconProps } from "@/interfaces/Icon";
import React from "react";

function Exit({fill, height = "800",width = "800"}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M12.207 9H5V7h7.136L11.05 5.914 12.464 4.5 16 8.036l-3.536 3.535-1.414-1.414L12.207 9zM10 4H8V2H2v12h6v-2h2v4H0V0h10v4z"
      ></path>
    </svg>
  );
}

export default Exit;
