import * as React from "react";
import { SVGProps } from "react";

const SvgInvestmentsIntroduction = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 61 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect width={61} height={61} rx={12} fill="#0073CE" />
    <circle
      opacity={0.6}
      cx={30.5}
      cy={30.5}
      r={14.5}
      stroke="url(#investments-introduction_svg__a)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity={0.8}
      d="M30.391 21.02v18.043"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M34.119 24.3h-5.592c-.692 0-1.355.303-1.845.841a3.022 3.022 0 0 0-.764 2.03c0 .761.275 1.491.764 2.03.49.538 1.153.84 1.845.84h3.728c.692 0 1.356.303 1.845.841.49.538.765 1.268.765 2.03 0 .76-.275 1.491-.765 2.03-.49.538-1.153.84-1.845.84h-6.337"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="investments-introduction_svg__a"
        x1={30.5}
        y1={15}
        x2={30.5}
        y2={46}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgInvestmentsIntroduction;
