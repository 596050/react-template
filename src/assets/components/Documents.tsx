import * as React from "react";

function SvgDocuments(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9l-7-7z"
        stroke="#333"
      />
      <path d="M13 2v7h7" stroke="#333" />
    </svg>
  );
}

export default SvgDocuments;
