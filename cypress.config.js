const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    baseUrl:"https://www.saucedemo.com/"
  },
  reporter:'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir:'cypress/reports/sauceDemo',
    reportTitle: 'Cypress Test Report',
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveJson: true,
    saveAllAttempts: false,
  },
  video: true,
  trashAssetsBeforeRuns: true,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
