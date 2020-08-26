import * as React from "react";

function SvgArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={9} height={14} fill="none" {...props}>
      <path
        d="M.646 1.646L2.061.232 8.768 6.94 2.06 13.646.646 12.232 5.94 6.94.646 1.646z"
        fill="#333"
      />
    </svg>
  );
}

export default SvgArrowRight;
