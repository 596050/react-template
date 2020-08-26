import * as React from "react";

function SvgWarning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <circle cx={12} cy={12} r={11} stroke="#C43A00" />
      <path d="M12 8v5" stroke="#C43A00" />
      <circle cx={12} cy={16} r={1} fill="#C43A00" />
    </svg>
  );
}

export default SvgWarning;
