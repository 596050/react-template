import * as React from "react";

function SvgPushpin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={21} fill="none" {...props}>
      <path
        d="M2 1a1 1 0 011-1h14a1 1 0 110 2h-1l1 9h2a1 1 0 110 2h-8v7a1 1 0 11-2 0v-7H1a1 1 0 110-2h2l1-9H3a1 1 0 01-1-1zm3 10h10l-1-9H6l-.5 4.5L5 11z"
        fill="#0E4EFB"
      />
    </svg>
  );
}

export default SvgPushpin;
