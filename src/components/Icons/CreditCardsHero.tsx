import * as React from "react";
import { SVGProps } from "react";

const SvgCreditCardsHero = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 697 538"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g opacity={0.2} filter="url(#credit-cards-hero_svg__a)">
      <path
        d="m305.12 485.319 4.364-188.19a11.998 11.998 0 0 1 8.01-11.04l292.022-102.865c7.149-2.519 14.814 2.14 15.87 9.646l30.785 218.793a12 12 0 0 1-9.295 13.389l-327.171 72.262c-7.602 1.679-14.766-4.212-14.585-11.995Z"
        fill="url(#credit-cards-hero_svg__b)"
      />
    </g>
    <path d="m266.644 438.669 4.364-188.19a12 12 0 0 1 8.009-11.04L571.04 136.574c7.149-2.518 14.814 2.141 15.87 9.647l30.785 218.792a12 12 0 0 1-9.295 13.39l-327.171 72.262c-7.602 1.679-14.766-4.213-14.585-11.996Z" />
    <path
      d="m266.772 437.888 4.363-188.189a12 12 0 0 1 8.01-11.04l292.023-102.865c7.149-2.519 14.814 2.14 15.87 9.646l30.785 218.793a12 12 0 0 1-9.295 13.389l-327.171 72.262c-7.602 1.679-14.766-4.213-14.585-11.996Z"
      fill="url(#credit-cards-hero_svg__c)"
      style={{
        mixBlendMode: "multiply",
      }}
      opacity={0.6}
    />
    <path d="M3.074 223.869 55.669 10.718a12 12 0 0 1 13.546-8.975l356.7 57.05c6.74 1.077 11.225 7.553 9.864 14.242l-44.892 220.578c-1.298 6.376-7.441 10.557-13.849 9.423L12.633 238.56c-6.836-1.21-11.223-7.951-9.56-14.691Z" />
    <defs>
      <radialGradient
        id="credit-cards-hero_svg__c"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(53.747 -113.175 441.534) scale(225.05 246.483)"
      >
        <stop stopColor="#03385E" />
        <stop offset={1} stopColor="#00D3D9" stopOpacity={0} />
      </radialGradient>
      <linearGradient
        id="credit-cards-hero_svg__b"
        x1={200.822}
        y1={724.811}
        x2={525.77}
        y2={255.049}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1A4263" />
        <stop offset={1} stopColor="#0073CE" stopOpacity={0} />
      </linearGradient>
      <filter
        id="credit-cards-hero_svg__a"
        x={265.117}
        y={142.535}
        width={431.172}
        height={395.067}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          stdDeviation={20}
          result="effect1_foregroundBlur_6355_1167"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgCreditCardsHero;
