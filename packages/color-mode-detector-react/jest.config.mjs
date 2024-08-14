/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  moduleNameMapper: { "@burzomir/(.*)": "<rootDir>/../$1/dist/main.js" },
};
