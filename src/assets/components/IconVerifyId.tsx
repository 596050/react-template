import * as React from "react";

function SvgIconVerifyId(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={72} height={72} fill="none" {...props}>
      <rect opacity={0.1} width={72} height={72} rx={9} fill="#0E4EFB" />
      <rect x={15.5} y={21.5} width={41} height={29} rx={3} stroke="#0E4EFB" />
      <path
        d="M35 44c0-3.314-2.91-6-6.5-6S22 40.686 22 44M28.5 34a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
        stroke="#0E4EFB"
      />
      <rect
        x={39.75}
        y={33.75}
        width={10.5}
        height={1.5}
        rx={0.75}
        stroke="#0E4EFB"
      />
      <mask id="iconVerifyId_svg__a" fill="#fff">
        <path d="M39 28.5a1.5 1.5 0 011.5-1.5H45a1.5 1.5 0 010 3h-4.5a1.5 1.5 0 01-1.5-1.5z" />
      </mask>
      <path
        d="M40.5 30H45v-6h-4.5v6zm4.5-3h-4.5v6H45v-6zm-4.5 0a1.5 1.5 0 011.5 1.5h-6a4.5 4.5 0 004.5 4.5v-6zm3 1.5A1.5 1.5 0 0145 27v6a4.5 4.5 0 004.5-4.5h-6zM45 30a1.5 1.5 0 01-1.5-1.5h6A4.5 4.5 0 0045 24v6zm-4.5-6a4.5 4.5 0 00-4.5 4.5h6a1.5 1.5 0 01-1.5 1.5v-6z"
        fill="#0E4EFB"
        mask="url(#iconVerifyId_svg__a)"
      />
      <mask id="iconVerifyId_svg__b" fill="#fff">
        <path d="M39 40.5a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 010 3h-9a1.5 1.5 0 01-1.5-1.5z" />
      </mask>
      <path
        d="M40.5 42h9v-6h-9v6zm9-3h-9v6h9v-6zm-9 0a1.5 1.5 0 011.5 1.5h-6a4.5 4.5 0 004.5 4.5v-6zm7.5 1.5a1.5 1.5 0 011.5-1.5v6a4.5 4.5 0 004.5-4.5h-6zm1.5 1.5a1.5 1.5 0 01-1.5-1.5h6a4.5 4.5 0 00-4.5-4.5v6zm-9-6a4.5 4.5 0 00-4.5 4.5h6a1.5 1.5 0 01-1.5 1.5v-6z"
        fill="#0E4EFB"
        mask="url(#iconVerifyId_svg__b)"
      />
    </svg>
  );
}

export default SvgIconVerifyId;
