module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  collectCoverage: true,         
  collectCoverageFrom: [
  'src/**/*.{ts,tsx}',
  '!src/**/*.d.ts',
  '!src/**/*.spec.{ts,tsx}',
  '!src/**/*.test.{ts,tsx}',
  '!src/**/index.{ts,tsx}', 
  ],
  coverageDirectory: 'coverage', 
  coverageReporters: ['text', 'lcov', 'json'], 
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleNameMapper: { // This ensures jest can handle module imports correctly
    '^@/(.*)$': '<rootDir>/src/$1', // Adjust this for your custom alias if needed
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Setup for jest-dom assertions
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], // Ignore these folders in tests
};