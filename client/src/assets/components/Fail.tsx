import * as React from "react";

function SvgFail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        fill="#CC0700"
      />
      <path
        d="M13 8a1 1 0 10-2 0v5a1 1 0 102 0V8zm-1 9a1 1 0 100-2 1 1 0 000 2z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgFail;
