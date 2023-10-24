/** @type {import('ts-jest').JestConfigWithTsJest} */

import type { JestConfigWithTsJest } from "ts-jest";

export default {
  preset: "ts-jest",
  testEnvironment: "node",
  projects: ["<rootDir>"],
  collectCoverageFrom: ["src/**/*", "!**/node_modules/**"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
} as JestConfigWithTsJest;
