import * as React from "react";

function SvgDashboardUser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={38} height={38} fill="none" {...props}>
      <path
        d="M31 35.02c0-7.18-5.373-13-12-13s-12 5.82-12 13M19 17a7 7 0 100-14 7 7 0 000 14z"
        stroke="#2762FF"
      />
    </svg>
  );
}

export default SvgDashboardUser;
