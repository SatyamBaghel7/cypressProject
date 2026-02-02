const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    baseUrl:"https://www.saucedemo.com/"
  },
  reporter:'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir:'cypress/reports/sauceDemo',
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
