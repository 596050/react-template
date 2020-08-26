import * as React from "react";

function SvgCompany(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <rect x={7} y={5} width={5} height={2} rx={1} fill="#444" />
      <rect x={13} y={5} width={5} height={2} rx={1} fill="#444" />
      <rect x={7} y={9} width={5} height={2} rx={1} fill="#444" />
      <rect x={13} y={9} width={5} height={2} rx={1} fill="#444" />
      <rect x={7} y={13} width={5} height={2} rx={1} fill="#444" />
      <rect x={13} y={13} width={5} height={2} rx={1} fill="#444" />
      <path d="M16 23v-4a1 1 0 00-1-1h-5a1 1 0 00-1 1v4" stroke="#444" />
      <path d="M21 23V3a2 2 0 00-2-2H6a2 2 0 00-2 2v20" stroke="#444" />
    </svg>
  );
}

export default SvgCompany;
