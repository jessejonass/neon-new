import * as React from "react";
import { SVGProps } from "react";

const SvgNoTaxesIntroduction = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 61 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect width={61} height={61} rx={12} fill="#00A5F0" />
    <path
      d="M40.091 20.182 20.455 39.818"
      stroke="url(#no-taxes-introduction_svg__a)"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={22.636}
      cy={21.636}
      r={2.136}
      fill="#fff"
      stroke="#fff"
      strokeWidth={3}
    />
    <circle
      cx={38.636}
      cy={38.364}
      r={2.136}
      fill="#fff"
      stroke="#fff"
      strokeWidth={3}
    />
    <defs>
      <linearGradient
        id="no-taxes-introduction_svg__a"
        x1={39.87}
        y1={20.087}
        x2={11.174}
        y2={45.652}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgNoTaxesIntroduction;
