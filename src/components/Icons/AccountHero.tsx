import * as React from "react";
import { SVGProps } from "react";

const SvgAccountHero = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      opacity={0.8}
      d="M14.28 1 1 24"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={1.724}
      y={3.205}
      width={11.951}
      height={17.263}
      rx={3}
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgAccountHero;
