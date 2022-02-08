import * as React from "react";
import { SVGProps } from "react";

const SvgSandwichMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 39 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g
      filter="url(#sandwich-menu_svg__a)"
      stroke="#fff"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2h27M6 12.5h27M14 23.5h19" />
    </g>
    <defs>
      <filter
        id="sandwich-menu_svg__a"
        x={0.75}
        y={0.75}
        width={37.5}
        height={32}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_207_726" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_207_726"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgSandwichMenu;
