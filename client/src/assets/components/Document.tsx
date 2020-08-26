import * as React from "react";

function SvgDocument(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={32} height={40} fill="none" {...props}>
      <path
        d="M1 4a3 3 0 013-3h11.93a4 4 0 012.83 1.17l11.07 11.07A4 4 0 0131 16.07V36a3 3 0 01-3 3H4a3 3 0 01-3-3V4z"
        fill="#fff"
        stroke="#0E4EFB"
      />
      <path
        d="M29.59 13H22a3 3 0 01-3-3V2.41L29.59 13z"
        fill="#fff"
        stroke="#0E4EFB"
      />
    </svg>
  );
}

export default SvgDocument;
