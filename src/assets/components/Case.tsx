import * as React from "react";

function SvgCase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={64} height={64} fill="none" {...props}>
      <path
        d="M36.65 24.74l1.6 1.2v-2.69h1v3.44l.4.3L43 29.5V43h-9.25v-5a3.25 3.25 0 00-6.5 0v5H21V29.5l11-8.25 4.65 3.49z"
        stroke="#fff"
      />
    </svg>
  );
}

export default SvgCase;
