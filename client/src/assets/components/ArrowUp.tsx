import * as React from "react";

function SvgArrowUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={14} height={18} fill="none" {...props}>
      <path
        d="M.35 6.7l1.42 1.42L6 3.9v13.46h2V3.77l4.35 4.35 1.42-1.41L7.07 0 .34 6.7z"
        fill="#9EA3AD"
      />
    </svg>
  );
}

export default SvgArrowUp;
