module.exports = {
  roots: ['<rootDir>/src'],
  modulePaths: ['src'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  setupTestFrameworkScriptFile: '<rootDir>enzyme.config.js',

  setupFiles: [
    'raf/polyfill',
  ],
};
