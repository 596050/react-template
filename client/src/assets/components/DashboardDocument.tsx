import * as React from "react";

function SvgDashboardDocument(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={38} height={38} fill="none" {...props}>
      <path
        d="M6 7a4 4 0 014-4h8.577a5 5 0 013.508 1.437l8.423 8.294A5 5 0 0132 16.294V31a4 4 0 01-4 4H10a4 4 0 01-4-4V7z"
        stroke="#305DFF"
      />
      <path
        d="M30.26 12.487c.638.628.194 1.713-.7 1.713h-4.935a4 4 0 01-4-4V5.388c0-.887 1.07-1.335 1.702-.713l7.934 7.812z"
        stroke="#305DFF"
      />
    </svg>
  );
}

export default SvgDashboardDocument;
