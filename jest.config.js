module.exports = {
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/test/svg-file-mock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png)$': '<rootDir>/test/image-file-mock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
}
