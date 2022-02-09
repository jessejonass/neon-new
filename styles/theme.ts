export type DefaultTheme = typeof dark;

const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

const sizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.5rem",
  xxl: "2rem",
};

const widths = {
  xxs: 0,
  xs: 280,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1366,
  xxl: 1536,
};

const light = {
  colors: {
    grey600: "#33303E",
    grey500: "#4E4B59",
    grey400: "#5F5C6B",
    grey300: "#7A7786",
    grey200: "#C6C5CE",
    grey100: "#F1F0F5",

    bg: "#FFFFFF",
    text: "#33303E",

    blue600: "#0073CE",
    blue500: "#00A5F0",

    green400: "#00D7D7",

    yellow600: "#FFC800",
    yellow500: "#FFDC5C",

    gradient: "linear-gradient(99.31deg, #00A5F0 7.94%, #00D7D7 95.32%)",
  },
  spacing,
  sizes,
  widths,
};

const dark = {
  colors: {
    grey600: "#33303E",
    grey500: "#4E4B59",
    grey400: "#5F5C6B",
    grey300: "#7A7786",
    grey200: "#C6C5CE",
    grey100: "#F1F0F5",

    bg: "#FFFFFF",
    text: "#33303E",

    blue600: "#0073CE",
    blue500: "#00A5F0",

    green400: "#00D7D7",

    yellow600: "#FFC800",
    yellow500: "#FFDC5C",

    gradient: "linear-gradient(99.31deg, #00A5F0 7.94%, #00D7D7 95.32%)",
  },
  spacing,
  sizes,
  widths,
};

export { dark, light };
