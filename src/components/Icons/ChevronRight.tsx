import * as React from "react";
import { SVGProps } from "react";

const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="m1 1 7 7-7 7" stroke="#E1E0E7" strokeWidth={2} />
  </svg>
);

export default SvgChevronRight;
