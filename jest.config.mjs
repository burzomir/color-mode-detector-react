/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  moduleNameMapper: {
    "@burzomir/(.*)": "<rootDir>/node_modules/@burzomir/$1/dist/index.js",
  },
};
