import * as React from "react";
import { SVGProps } from "react";

const SvgLogoRect = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 250 91"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect width={250} height={91} rx={12} fill="#01BCE4" />
  </svg>
);

export default SvgLogoRect;
