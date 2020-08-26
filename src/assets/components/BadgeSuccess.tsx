import * as React from "react";

function SvgBadgeSuccess(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-5.293-3.293a1 1 0 00-1.414-1.414l-7.21 7.21-3.302-4.128a1 1 0 00-1.562 1.25l4 5a1 1 0 001.488.082l8-8z"
        fill="#007B46"
      />
    </svg>
  );
}

export default SvgBadgeSuccess;
