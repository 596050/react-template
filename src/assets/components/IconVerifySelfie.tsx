import * as React from "react";

function SvgIconVerifySelfie(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={72} height={72} fill="none" {...props}>
      <rect opacity={0.1} width={72} height={72} rx={6} fill="#0E4EFB" />
      <path
        d="M54 54v1.5a1.5 1.5 0 001.5-1.5H54zm-36 0h-1.5a1.5 1.5 0 001.5 1.5V54zm36-36h1.5a1.5 1.5 0 00-1.5-1.5V18zm-36 0v-1.5a1.5 1.5 0 00-1.5 1.5H18zm27.6 37.5H54v-3h-8.4v3zm9.9-1.5v-8.4h-3V54h3zm-29.1-1.5H18v3h8.4v-3zM19.5 54v-8.4h-3V54h3zm33-36v8.4h3V18h-3zm-26.1-1.5H18v3h8.4v-3zM16.5 18v8.4h3V18h-3zm29.1 1.5H54v-3h-8.4v3z"
        fill="#0E4EFB"
      />
      <path
        d="M45 47a9 9 0 10-18 0M36 34a5 5 0 100-10 5 5 0 000 10z"
        stroke="#0E4EFB"
      />
    </svg>
  );
}

export default SvgIconVerifySelfie;
