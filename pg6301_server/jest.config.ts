import type {Config} from 'jest';

const config: Config = {
    verbose: true,
    testEnvironment: 'node',
    testTimeout: 30000,
    collectCoverageFrom: [
        "**/*.ts",
        "!dist/**",
        "!coverage/**"
      ]
};

export default config;