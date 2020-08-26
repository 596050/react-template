import * as React from "react";

function SvgSourcing(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <path
        d="M5.08 5.76h6.8m-6.8 2.72h6.8m-6.8 2.72h6.8M8.48 15.96A7.48 7.48 0 108.48 1a7.48 7.48 0 000 14.96zM13.84 13.84l3.85 3.85"
        stroke="#333"
      />
    </svg>
  );
}

export default SvgSourcing;
