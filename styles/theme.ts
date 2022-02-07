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
  desktopAndUp: 1024,
  tabletAndUp: 728,
  mobileOnly: 500,
};

const light = {
  colors: {
    bg: "#fff",
    text: "#303030",
    green: "#749E90",
    petroleum: "#778C90",
    jacarta: "#3f3b54",
  },
  spacing,
  sizes,
  breakpoints,
};

const dark = {
  colors: {
    bg: "#303030",
    text: "#fff",
    green: "#749E90",
    petroleum: "#778C90",
    jacarta: "#3f3b54",
  },
  spacing,
  sizes,
  breakpoints,
};

export { dark, light };
