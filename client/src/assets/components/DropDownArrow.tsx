import * as React from "react";

function SvgDropDownArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} fill="none" {...props}>
      <path
        d="M13.354 3.646l1.414 1.415-6.707 6.707L1.354 5.06l1.414-1.415L8.06 8.94l5.293-5.293z"
        fill="#333"
      />
    </svg>
  );
}

export default SvgDropDownArrow;
