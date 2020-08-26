import * as React from "react";

function SvgFolder(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={48} height={48} fill="none" {...props}>
      <path
        d="M12.22 24.18A1 1 0 0113.2 23h21.6a1 1 0 01.98 1.18l-1.5 8a1 1 0 01-.98.82H14.7a1 1 0 01-.99-.82l-1.49-8zM15 16a1 1 0 011-1h4.14a1 1 0 01.72.3l1.6 1.68c.2.2.45.3.73.3H32a1 1 0 011 1V22a1 1 0 01-1 1H16a1 1 0 01-1-1v-6z"
        stroke="#0D47A1"
      />
    </svg>
  );
}

export default SvgFolder;
