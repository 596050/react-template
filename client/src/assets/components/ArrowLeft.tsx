import * as React from "react";

function SvgArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={18}
      height={14}
      fill="none"
      style={{
        flexShrink: 0,
      }}
      {...props}
    >
      <path
        d="M6.707 14l1.414-1.414L3.89 8.354h13.465v-2H3.768L8.12 2 6.707.586 0 7.293 6.707 14z"
        fill="#333"
      />
    </svg>
  );
}

export default SvgArrowLeft;
