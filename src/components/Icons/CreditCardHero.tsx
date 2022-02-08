import * as React from "react";
import { SVGProps } from "react";

const SvgCreditCardHero = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 25 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect
      x={1}
      y={1}
      width={22.174}
      height={17}
      rx={3}
      stroke="#fff"
      strokeWidth={2}
    />
    <path
      opacity={0.7}
      d="M1.85 6.913h20.696"
      stroke="#fff"
      strokeWidth={1.5}
    />
  </svg>
);

export default SvgCreditCardHero;
