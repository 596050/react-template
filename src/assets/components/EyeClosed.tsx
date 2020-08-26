import * as React from "react";

function SvgEyeClosed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <g clipPath="url(#eye-closed_svg__clip0)">
        <path d="M0 0h24v24H0V0z" fill="#fff" />
        <path d="M1 12c1.795 4.11 6.044 7 11 7s9.205-2.89 11-7" stroke="#444" />
        <rect
          x={20.707}
          y={15.414}
          width={1}
          height={3}
          rx={0.5}
          transform="rotate(-45 20.707 15.414)"
          fill="#444"
          stroke="#444"
        />
        <rect
          x={-0.707}
          width={1}
          height={3}
          rx={0.5}
          transform="scale(-1 1) rotate(-45 16.485 11.121)"
          fill="#444"
          stroke="#444"
        />
        <rect
          x={-0.641}
          y={0.299}
          width={1}
          height={2.665}
          rx={0.5}
          transform="scale(-1 1) rotate(-20 47.825 33.589)"
          fill="#444"
          stroke="#444"
        />
        <rect
          x={16.492}
          y={21.045}
          width={1}
          height={2.665}
          rx={0.5}
          transform="rotate(160 16.492 21.045)"
          fill="#444"
          stroke="#444"
        />
      </g>
      <defs>
        <clipPath id="eye-closed_svg__clip0">
          <path d="M0 0h24v24H0V0z" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgEyeClosed;
