import * as React from "react";

function SvgClients(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={22} height={19} fill="none" {...props}>
      <path
        d="M12.88 18c0-3.58-2.66-6.48-5.94-6.48C3.66 11.52 1 14.42 1 18m13.67-4.48a4.3 4.3 0 011.77-.38c2.52 0 4.56 2.18 4.56 4.86M6.94 8.29a3.6 3.6 0 003.56-3.65A3.6 3.6 0 006.94 1a3.6 3.6 0 00-3.57 3.64A3.6 3.6 0 006.95 8.3zm9.95 2.29a2.48 2.48 0 002.45-2.5c0-1.39-1.1-2.51-2.45-2.51a2.48 2.48 0 00-2.45 2.5c0 1.4 1.1 2.51 2.45 2.51z"
        stroke="#333"
      />
    </svg>
  );
}

export default SvgClients;
