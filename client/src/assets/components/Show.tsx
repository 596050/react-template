import * as React from "react";

function SvgShow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path fill="#fff" d="M0 0h24v24H0z" />
      <circle cx={12} cy={12} r={5} fill="#333" />
      <path
        d="M1.38 12.786a1.668 1.668 0 010-1.572C3.35 7.526 7.368 5 12 5c4.634 0 8.65 2.526 10.62 6.214.261.491.261 1.08 0 1.572C20.65 16.474 16.633 19 12 19c-4.633 0-8.65-2.526-10.62-6.214z"
        stroke="#333"
      />
    </svg>
  );
}

export default SvgShow;
