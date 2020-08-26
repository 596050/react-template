import * as React from "react";

function SvgTick(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} fill="none" {...props}>
      <path
        d="M2.78 6.375a1 1 0 00-1.56 1.25l1.56-1.25zM6 12l-.78.625a1 1 0 001.487.082L6 12zm8.707-7.293a1 1 0 00-1.414-1.414l1.414 1.414zM1.22 7.625l4 5 1.562-1.25-4-5-1.562 1.25zm5.488 5.082l8-8-1.414-1.414-8 8 1.414 1.414z"
        fill="#71747E"
      />
    </svg>
  );
}

export default SvgTick;
