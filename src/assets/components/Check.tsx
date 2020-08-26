import * as React from "react";

function SvgCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={14} height={11} fill="none" {...props}>
      <path
        d="M2.103 3.935L0 6.022 5.017 11 14 2.087 11.897 0l-6.88 6.826-2.914-2.891z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgCheck;
