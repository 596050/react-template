import * as React from "react";

function SvgBadgeWarning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M9.317 2.367c1.106-2.212 4.261-2.212 5.367 0l8.146 16.291c.997 1.995-.454 4.342-2.684 4.342H3.854c-2.23 0-3.68-2.347-2.683-4.342L9.317 2.367z"
        fill="#FF8400"
      />
      <path
        d="M13 9a1 1 0 10-2 0v5a1 1 0 102 0V9zm-1 9a1 1 0 100-2 1 1 0 000 2z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgBadgeWarning;
