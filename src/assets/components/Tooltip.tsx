import * as React from "react";

function SvgTooltip(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm1-8a1 1 0 11-2 0 1 1 0 012 0zm-2-6a1 1 0 111 1 1 1 0 00-1 1v1a1 1 0 102 0v-.17A3.001 3.001 0 109 10a1 1 0 102 0z"
        fill="#444"
      />
    </svg>
  );
}

export default SvgTooltip;
