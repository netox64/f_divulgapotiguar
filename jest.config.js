module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.js$': 'babel-jest',
    },
    moduleNameMapper: {
      // This ensures jest can handle module imports correctly
      '^@/(.*)$': '<rootDir>/$1', // Adjust this for your custom alias if needed
      '\\.module\\.css$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Setup for jest-dom assertions
    testPathIgnorePatterns: ['/node_modules/', '/.next/'], // Ignore these folders in tests
  };