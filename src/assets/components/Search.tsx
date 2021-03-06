import * as React from "react";

function SvgSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={18} height={18} fill="none" {...props}>
      <path
        d="M14.32 12.9l3.39 3.4a1 1 0 01-1.42 1.4l-3.38-3.38a8 8 0 111.41-1.41zM8 14A6 6 0 108 2a6 6 0 000 12z"
        fill="#444"
      />
    </svg>
  );
}

export default SvgSearch;
