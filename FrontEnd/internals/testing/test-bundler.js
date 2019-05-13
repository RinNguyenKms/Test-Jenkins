// needed for regenerator-runtime
// (ES7 generator support is required by redux-saga)
import '@babel/polyfill';

/* Add custom settings to Jasmine. */
/* globals jasmine */

const reporters = require('jasmine-reporters');
const junitReporter = new reporters.JUnitXmlReporter({
  consolidateAll: false,
  savePath: './output/TestResults',
  filePrefix: 'junit-',
});
jasmine.VERBOSE = true;
jasmine.getEnv().addReporter(junitReporter);
