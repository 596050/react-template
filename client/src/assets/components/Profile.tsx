import * as React from "react";

function SvgProfile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={48} height={48} fill="none" {...props}>
      <path
        d="M31.88 34.73c0-4.78-3.55-8.66-7.94-8.66-4.39 0-7.94 3.88-7.94 8.66M23.94 22.74a4.82 4.82 0 004.76-4.87c0-2.69-2.13-4.87-4.76-4.87a4.82 4.82 0 00-4.76 4.87 4.82 4.82 0 004.76 4.87z"
        stroke="#e65100"
      />
    </svg>
  );
}

export default SvgProfile;
