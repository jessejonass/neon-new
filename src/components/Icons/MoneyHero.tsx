import * as React from "react";
import { SVGProps } from "react";

const SvgMoneyHero = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 13 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path opacity={0.8} d="M6.455 0v22" stroke="#fff" strokeWidth={2} />
    <path
      d="M11 4H4.182c-.844 0-1.653.369-2.25 1.025A3.685 3.685 0 0 0 1 7.5c0 .928.335 1.819.932 2.475C2.529 10.63 3.338 11 4.182 11h4.545c.844 0 1.653.369 2.25 1.025.597.656.932 1.547.932 2.475 0 .928-.335 1.819-.932 2.475C10.38 17.63 9.571 18 8.727 18H1"
      stroke="#fff"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMoneyHero;
