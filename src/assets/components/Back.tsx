import * as React from "react";

function SvgBack(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={18} height={15} fill="none" {...props}>
      <path
        d="M6.957 15l1.467-1.581-4.39-4.733H18V6.45H3.908L8.424 1.58 6.957 0 0 7.5 6.957 15z"
        fill="#0E4EFB"
      />
    </svg>
  );
}

export default SvgBack;
