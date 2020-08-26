import * as React from "react";

function SvgCamera(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z"
        stroke="#0E4EFB"
      />
      <path d="M12 17a4 4 0 100-8 4 4 0 000 8z" stroke="#0E4EFB" />
    </svg>
  );
}

export default SvgCamera;
