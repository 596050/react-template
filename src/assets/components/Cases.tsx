import * as React from "react";

function SvgCases(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={21} fill="none" {...props}>
      <path
        d="M1.22 11.18A1 1 0 012.2 10h19.6a1 1 0 01.98 1.18l-1.5 8a1 1 0 01-.98.82H3.7a1 1 0 01-.99-.82l-1.49-8zM3 2a1 1 0 011-1h4.14a1 1 0 01.72.3l1.6 1.68c.2.2.45.3.73.3H20a1 1 0 011 1V9a1 1 0 01-1 1H4a1 1 0 01-1-1V2z"
        stroke="#333"
      />
      <path d="M5.5 7.5h13v2h-13v-2zm1-2h11v2h-11v-2z" stroke="#333" />
    </svg>
  );
}

export default SvgCases;
