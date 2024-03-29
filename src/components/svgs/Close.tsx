import React from "react";

export default function Close(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="14px"
      height="14px"
      viewBox="0 0 14 14"
      enableBackground="new 0 0 14 14"
      xmlSpace="preserve"
      {...props}
    >
      <path
        fill="#666666"
        d="M14,1.4L12.6,0L7,5.6L1.4,0L0,1.4L5.6,7L0,12.6L1.4,14L7,8.4l5.6,5.6l1.4-1.4L8.4,7L14,1.4z"
      />
    </svg>
  );
}
