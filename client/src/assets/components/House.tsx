import * as React from "react";

function SvgHouse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={48} height={48} fill="none" {...props}>
      <path
        d="M30.25 15.94v-.69h1v3.44l.4.3L35 21.5V35H13V21.5l11-8.25 4.65 3.49 1.6 1.2v-2z"
        stroke="#333"
      />
      <path
        d="M22.86 27.06l.04.95a2 2 0 01-.43 1.34h4.47V31H19.7v-1.65h.63c.32-.08.49-.49.49-1.22l-.04-1.07h-1.1v-1.61h1.05l-.05-1.55c0-.92.28-1.65.84-2.18.57-.54 1.32-.8 2.27-.8.96 0 1.72.25 2.27.77.55.51.83 1.2.83 2.08h-1.96c0-.39-.1-.69-.3-.9-.2-.2-.48-.3-.85-.3-.3 0-.55.11-.75.34-.2.22-.3.55-.3.99l.06 1.55h2.12v1.61h-2.05z"
        fill="#333"
      />
    </svg>
  );
}

export default SvgHouse;
