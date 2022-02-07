module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/"],
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node",
    "svg",
    "png",
  ],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.jest.json",
    },
  },
  moduleDirectories: ["src", "node_modules"],
  moduleNameMapper: {
    ".+\\.(png|jpg|svg|ttf|woff|woff2|css)$": "identity-obj-proxy",
  },
};
