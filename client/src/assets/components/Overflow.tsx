import * as React from "react";

function SvgOverflow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={4} fill="none" {...props}>
      <path
        d="M2 4a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4zm10-2a2 2 0 11-4 0 2 2 0 014 0z"
        fill="#333"
      />
    </svg>
  );
}

export default SvgOverflow;
