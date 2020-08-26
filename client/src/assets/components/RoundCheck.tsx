import * as React from "react";

function SvgRoundCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <circle cx={10} cy={10} r={8} stroke="#fff" fill="$0E4EFB" />
    </svg>
  );
}

export default SvgRoundCheck;
