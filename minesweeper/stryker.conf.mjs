// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment:
    "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information.",
  packageManager: "yarn",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  coverageAnalysis: "perTest",
  thresholds: { high: 90, low: 88, break: 85 },
  mutate: [
    "src/**/*.ts?(x)",
    "!src/**/*@(.test|.spec|Spec|stories|styled).ts?(x)",
  ],
};
export default config;
