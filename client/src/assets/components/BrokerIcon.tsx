import * as React from "react";

function SvgBrokerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={72} height={72} fill="none" {...props}>
      <rect opacity={0.1} width={72} height={72} rx={6} fill="#0E4EFB" />
      <path
        d="M50 33v17H22V33l14-10.5 5.8 4.35 3.2 2.4.8.6L50 33z"
        stroke="#0E4EFB"
      />
    </svg>
  );
}

export default SvgBrokerIcon;
