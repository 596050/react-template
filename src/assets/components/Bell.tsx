import * as React from "react";

function SvgBell(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={18} height={20} fill="none" {...props}>
      <path
        d="M16.07 14.42c.9 0 1.23-1.19.46-1.66v0a.9.9 0 01-.43-.76V7.4c0-3.53-2.97-6.4-6.63-6.4a6.52 6.52 0 00-6.63 6.4V12a.9.9 0 01-.43.76v0c-.77.47-.44 1.66.46 1.66h13.2zM6.85 16a2.59 2.59 0 002.62 2.56A2.59 2.59 0 0012.09 16"
        stroke="#444"
      />
    </svg>
  );
}

export default SvgBell;
