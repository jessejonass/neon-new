import * as React from "react";
import { SVGProps } from "react";

const SvgCircleBanner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 108 103"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M82.384-59.958a81.231 81.231 0 0 0-57.447 23.423A81.048 81.048 0 0 0 .83 20.575a81.416 81.416 0 0 0 23.886 57.603 81.599 81.599 0 0 0 57.667 23.859 81.6 81.6 0 0 0 57.667-23.86 81.416 81.416 0 0 0 23.886-57.602 81.047 81.047 0 0 0-24.106-57.11 81.23 81.23 0 0 0-57.447-23.423Zm0 123.067a42.621 42.621 0 0 1-23.527-7.403 42.549 42.549 0 0 1-15.472-19.19 42.495 42.495 0 0 1-2.226-24.54A42.526 42.526 0 0 1 52.927-9.678a42.601 42.601 0 0 1 21.812-11.506 42.632 42.632 0 0 1 24.54 2.503 42.572 42.572 0 0 1 19.033 15.673 42.51 42.51 0 0 1 7.143 23.584 42.771 42.771 0 0 1-12.717 30.178 42.82 42.82 0 0 1-13.946 9.194 42.868 42.868 0 0 1-16.408 3.162Z"
      fill="url(#circle-banner_svg__a)"
    />
    <defs>
      <linearGradient
        id="circle-banner_svg__a"
        x1={39.516}
        y1={-122.779}
        x2={126.756}
        y2={88.721}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgCircleBanner;
