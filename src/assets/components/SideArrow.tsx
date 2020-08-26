import * as React from "react";

function SvgSideArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={9} height={14} fill="none" {...props}>
      <path
        d="M.65 1.65L2.06.23l6.7 6.7-6.7 6.72-1.41-1.42 5.29-5.3-5.3-5.28z"
        fill="#333"
      />
    </svg>
  );
}

export default SvgSideArrow;
