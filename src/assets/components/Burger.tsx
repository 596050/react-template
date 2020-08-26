import * as React from "react";

const SvgBurger = React.forwardRef<any, any>((props: React.SVGProps<SVGSVGElement>, ref) => {
  return (
    <svg width={48} height={48} fill="none" {...props}  ref={ref}>
      <path stroke="#ffffff" d="M15 16h18m-18 7h12m-12 7h18" />
    </svg>
  );
})

export default SvgBurger;
