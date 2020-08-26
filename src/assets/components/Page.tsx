import * as React from "react";

function SvgPage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={32} height={40} fill="none" {...props}>
      <path
        d="M1 4a3 3 0 013-3h11.929a4 4 0 012.828 1.172l11.071 11.07A4 4 0 0131 16.072V36a3 3 0 01-3 3H4a3 3 0 01-3-3V4z"
        fill="#fff"
        stroke="#0E4EFB"
      />
      <path
        d="M29.586 13H22a3 3 0 01-3-3V2.414L29.586 13z"
        fill="#fff"
        stroke="#0E4EFB"
      />
    </svg>
  );
}

export default SvgPage;
