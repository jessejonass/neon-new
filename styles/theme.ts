export type DefaultTheme = typeof dark;

const spacing = {
  xxs: 4,
  xs: 8,
  small: 12,
  normal: 16,
  large: 24,
  xl: 32,
  xxl: 40,
  margin: 30,
};

const sizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  normal: "1rem",
  large: "1.125rem",
  xl: "1.5rem",
  xxl: "2rem",
  margin: "1.875rem",
};

const breakpoints = {
  header: 1180,
  desktopAndUp: 1024,
  tabletAndUp: 728,
  mobileOnly: 500,
};

const light = {
  colors: {
    grey600: "#33303E",
    grey500: "#4E4B59",
    grey400: "#5F5C6B",
    grey300: "#7A7786",
    grey200: "#C6C5CE",
    grey100: "#F1F0F5",
    white: "#FFFFFF",
    blue: "#0073CE",
    blueLight: "#00A5F0",
    greenLight: "#00D7D7",
    yellow: "#FFC800",
    yellowLight: "#FFDC5C",
    gradient: "linear-gradient(99.31deg, #00A5F0 7.94%, #00D7D7 95.32%)",
  },
  spacing,
  sizes,
  breakpoints,
};

const dark = {
  colors: {
    grey600: "#33303E",
    grey500: "#4E4B59",
    grey400: "#5F5C6B",
    grey300: "#7A7786",
    grey200: "#C6C5CE",
    grey100: "#F1F0F5",
    white: "#FFFFFF",
    blue: "#0073CE",
    blueLight: "#00A5F0",
    greenLight: "#00D7D7",
    yellow: "#FFC800",
    yellowLight: "#FFDC5C",
    gradient: "linear-gradient(99.31deg, #00A5F0 7.94%, #00D7D7 95.32%)",
  },
  spacing,
  sizes,
  breakpoints,
};

export { dark, light };
