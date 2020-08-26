import * as React from "react";

function SvgMagnifyingGlass(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={18} height={18} fill="none" {...props}>
      <path
        d="M13.925 12.599l-.27.348.311.312 3.388 3.387a.5.5 0 01-.708.708l-3.387-3.388-.312-.312-.348.271a7.5 7.5 0 111.326-1.326zM8 14.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
        fill="#444"
        stroke="#444"
      />
    </svg>
  );
}

export default SvgMagnifyingGlass;
