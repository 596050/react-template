import * as React from "react";

function SvgPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={23} height={24} fill="none" {...props}>
      <path d="M1.41 12h19.8m-9.9 9.9V2.1" stroke="#fff" />
    </svg>
  );
}

export default SvgPlus;
