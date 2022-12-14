module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '.'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/$1',
    '@e2e/(.*)': '<rootDir>/cypress/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/cypress'],
  testPathIgnorePatterns: ['/node_modules/', '/cypress/', '/.next/'],
  coverageDirectory: '<rootDir>/coverage/unit',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'pages/api/__coverage__.ts',
    '/test-server/',
    'utils/factories.ts',
  ],
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
};
