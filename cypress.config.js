const { defineConfig } = require('cypress');
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');


module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {

  mochawesomeReporterOptions: {
    // code : false,
    charts: true,
    hml: true,
    reportPageTitle: 'Cypress Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts:false,
  },
},
  e2e: {
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    },
    // specPattern: "cypress/e2e/*.cy.js",
    testIsolation: false,
    specPattern:"cypress/FlightBookingTests/verifyUserCanSelectCountry.js",
    baseUrl:"https://rahulshettyacademy.com/dropdownsPractise/",
    defaultCommandTimeout : 8000,
    pageLoadTimeout : 10000
  },
  env :{
    //Custom enviromnet variable here
  },
  retries:{
    //tries agian on failure while run
    runMode:1,
    //tries again in gui 
    openMode:0
    
  }
  
});
