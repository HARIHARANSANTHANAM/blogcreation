module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFiles: ['./tests/setup.js'], 
  "moduleNameMapper": {
    "axios": "axios/dist/node/axios.cjs"
  },
    "collectCoverage": true,
    "collectCoverageFrom": ["**/*.{js,vue}"]
}
