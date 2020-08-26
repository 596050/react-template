import * as React from "react";

function SvgHome(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <g clipPath="url(#home_svg__clip0)">
        <path
          d="M10.586 1.29a2.05 2.05 0 012.828 0l8 7.73A1.9 1.9 0 0122 10.387v10.228c0 1.067-.895 1.932-2 1.932h-4c-1.105 0-2-.865-2-1.932v-4.348c0-1.067-.895-1.933-2-1.933s-2 .866-2 1.933v4.348c0 1.067-.895 1.932-2 1.932H4c-1.105 0-2-.865-2-1.932V10.387a1.9 1.9 0 01.586-1.367l8-7.73zM12 2.658l-8 7.73v10.228h4v-4.348c0-2.135 1.79-3.865 4-3.865s4 1.73 4 3.865v4.348h4V10.387l-8-7.73z"
          fill="#444"
        />
      </g>
      <defs>
        <clipPath id="home_svg__clip0">
          <path
            fill="#fff"
            transform="translate(0 .324)"
            d="M0 0h24v23.189H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgHome;
