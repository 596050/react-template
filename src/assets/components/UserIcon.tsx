import * as React from "react";

function SvgUserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={72} height={72} fill="none" {...props}>
      <rect opacity={0.1} width={72} height={72} rx={9} fill="#0E4EFB" />
      <path
        d="M47.103 31.581L45 33.668l5.017 4.979L59 29.733l-2.103-2.087-6.88 6.827-2.914-2.892z"
        fill="#0E4EFB"
      />
      <path
        d="M40.727 51c0-6.527-5.087-11.818-11.363-11.818S18 44.473 18 51M29.365 34.636a6.818 6.818 0 100-13.636 6.818 6.818 0 000 13.636z"
        stroke="#0E4EFB"
      />
    </svg>
  );
}

export default SvgUserIcon;
