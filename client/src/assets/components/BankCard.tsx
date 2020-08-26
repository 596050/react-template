import * as React from "react";

function SvgBankCard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={48} height={48} fill="none" {...props}>
      <rect x={11} y={15} width={26} height={19} rx={2} stroke="#006464" />
      <path fill="#006464" d="M11 19h26v4H11z" />
      <rect x={15} y={26} width={4} height={4} rx={1} fill="#006464" />
      <rect x={30} y={27} width={3} height={2} rx={1} fill="#006464" />
      <rect x={26} y={27} width={3} height={2} rx={1} fill="#006464" />
    </svg>
  );
}

export default SvgBankCard;
