import * as React from "react";

function SvgArrowForward(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={19} height={21} fill="none" {...props}>
      <g clipPath="url(#arrow-forward_svg__clip0)">
        <path
          d="M11.43 4l-1.386 1.476 4.146 4.417H1v2.087H14.31l-4.265 4.544L11.43 18 18 11l-6.57-7z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="arrow-forward_svg__clip0">
          <path fill="#fff" transform="rotate(90 9.5 9.5)" d="M0 0h21v19H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgArrowForward;
