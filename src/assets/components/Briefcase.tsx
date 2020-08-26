import * as React from "react";

function SvgBriefcase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={48} height={48} fill="none" {...props}>
      <path
        d="M13 26v7c0 1.1.9 2 2 2h18a2 2 0 002-2v-7m-6-9v-2a2 2 0 00-2-2h-6a2 2 0 00-2 2v2"
        stroke="#311B92"
      />
      <path
        d="M12 18h24v6.52a44.93 44.93 0 01-9 1.4v2a46.74 46.74 0 009.66-1.51A1.85 1.85 0 0038 24.6V18a2 2 0 00-2-2H12a2 2 0 00-2 2v6.6c0 .84.53 1.59 1.34 1.81 1.75.48 5.14 1.25 9.66 1.5v-2a44.93 44.93 0 01-9-1.4V18z"
        fill="#311B92"
      />
      <path stroke="#311B92" d="M21 25h6v4h-6z" />
    </svg>
  );
}

export default SvgBriefcase;
