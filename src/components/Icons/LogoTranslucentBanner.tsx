import * as React from "react";
import { SVGProps } from "react";

const SvgLogoTranslucentBanner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 192 168"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      opacity={0.45}
      d="M95.515.58a95.114 95.114 0 0 0-67.28 27.488A95.144 95.144 0 0 0 0 95.047a93.308 93.308 0 0 0 27.945 66.726 20.078 20.078 0 0 0 28.143 0 19.551 19.551 0 0 0 5.833-13.928 19.546 19.546 0 0 0-5.833-13.927 54.606 54.606 0 0 1-12.07-60.036 54.606 54.606 0 0 1 12.07-17.825 56.133 56.133 0 0 1 78.742 0 54.605 54.605 0 0 1 12.069 60.036 54.594 54.594 0 0 1-12.069 17.825 19.53 19.53 0 0 0-4.316 21.473 19.53 19.53 0 0 0 4.316 6.376 20.075 20.075 0 0 0 28.143 0 93.31 93.31 0 0 0 28.069-66.72 95.15 95.15 0 0 0-28.24-66.983A95.111 95.111 0 0 0 95.515.58Z"
      fill="url(#logo-translucent-banner_svg__a)"
    />
    <defs>
      <linearGradient
        id="logo-translucent-banner_svg__a"
        x1={165.28}
        y1={177.71}
        x2={44.561}
        y2={52.973}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgLogoTranslucentBanner;
