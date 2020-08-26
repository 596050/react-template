import * as React from "react";

function SvgClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" viewBox="0 0 20 20" {...props}>
<path
  d="M3 3l14 14M17 3L3 17"
  stroke="#ffffff"
  strokeWidth="3"
  strokeLinecap="square"
></path>
</svg>
  );
}

export default SvgClose;


