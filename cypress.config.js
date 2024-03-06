const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //html reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure =true;
      require('cypress-mochawesome-reporter/plugin')(on); // for html report
    },
  },
});

//Run the Command npx cypress run --spec cypress\e2e\MyFirstTest.cy.js --browser chrome