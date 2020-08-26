import * as React from "react";

function SvgDashboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={23} height={20} fill="none" {...props}>
      <path
        d="M4.94 5.9a1 1 0 010-1.8L9.8 1.68a3 3 0 012.69 0l4.87 2.44a1 1 0 010 1.78l-4.87 2.44a3 3 0 01-2.69 0L4.94 5.89z"
        stroke="#333"
      />
      <path
        d="M18.91 7.6a1.25 1.25 0 010 2.24l-6.09 3.04c-1.05.53-2.3.53-3.35 0L3.38 9.84a1.25 1.25 0 010-2.24"
        stroke="#333"
      />
      <path
        d="M20.46 11.66a1.5 1.5 0 010 2.68L13.16 18a4.5 4.5 0 01-4.03 0l-7.3-3.65a1.5 1.5 0 010-2.68"
        stroke="#333"
      />
    </svg>
  );
}

export default SvgDashboard;
