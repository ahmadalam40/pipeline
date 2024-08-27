const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "1umxyc",
    specPattern: "cypress/e2e/**/*.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'reporters/custom.js',
  reporter: 'mochawesome',

});
// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   reporter: 'mochawesome',
//   reporterOptions: {
//     reportDir: 'cypress/reports/mocha', // The directory where reports will be saved
//     overwrite: false,
//     html: false,
//     json: true,
//     reportFilename: '[name]-report',
//     timestamp: 'mmddyyyy_HHMMss', // Optionally include a timestamp in the report filename
//   },
//   e2e: {
//     setupNodeEvents(on, config) {
//       // Add any custom event listeners if needed
//       return config;
//     },
//   },
// });
