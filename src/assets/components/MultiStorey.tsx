import * as React from "react";

function SvgMultiStorey(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={48} height={48} fill="none" {...props}>
      <rect width={48} height={48} rx={6} fill="#CEE5FF" />
      <rect x={19} y={17} width={5} height={2} rx={1} fill="#0053B3" />
      <rect x={25} y={17} width={5} height={2} rx={1} fill="#0053B3" />
      <rect x={19} y={21} width={5} height={2} rx={1} fill="#0053B3" />
      <rect x={25} y={21} width={5} height={2} rx={1} fill="#0053B3" />
      <rect x={19} y={25} width={5} height={2} rx={1} fill="#0053B3" />
      <rect x={25} y={25} width={5} height={2} rx={1} fill="#0053B3" />
      <path d="M28 35v-4a1 1 0 00-1-1h-5a1 1 0 00-1 1v4" stroke="#0053B3" />
      <path d="M33 35V15a2 2 0 00-2-2H18a2 2 0 00-2 2v20" stroke="#0053B3" />
    </svg>
  );
}

export default SvgMultiStorey;
