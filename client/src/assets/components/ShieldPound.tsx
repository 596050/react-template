import * as React from "react";

function SvgShieldPound(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={48} height={48} fill="none" {...props}>
      <rect width={48} height={48} rx={6} fill="#C5F3F3" />
      <path
        d="M32 17.117v5.61c0 5.054-3.22 9.543-8 11.166-4.78-1.623-8-6.112-8-11.166v-5.61a15.203 15.203 0 007.282-2.305l.718-.45.718.45A15.203 15.203 0 0032 17.117zm-8.236-2.904zM34 22.727v-6.389a1.2 1.2 0 00-1.2-1.2c-2.483 0-4.915-.7-7.018-2.02l-.955-.599a1.556 1.556 0 00-1.654 0l-.955.6a13.203 13.203 0 01-7.018 2.019 1.2 1.2 0 00-1.2 1.2v6.389a13.793 13.793 0 009.458 13.094c.352.116.732.116 1.084 0A13.793 13.793 0 0034 22.727z"
        fill="#177272"
      />
      <path
        d="M23.942 24.439l.032.71c0 .483-.125.862-.375 1.137h3.86V28h-6.786v-1.714h.654c.24-.063.368-.281.38-.654l.007-.336-.032-.857h-1.028v-1.657h.977l-.038-1.377c0-.868.258-1.545.775-2.032.52-.49 1.223-.736 2.107-.736.948 0 1.686.244 2.215.73.534.487.8 1.147.8 1.98h-2.095c0-.664-.287-.996-.863-.996a.621.621 0 00-.52.26c-.131.17-.197.434-.197.794l.057 1.377h1.949v1.657h-1.88z"
        fill="#177272"
      />
    </svg>
  );
}

export default SvgShieldPound;
