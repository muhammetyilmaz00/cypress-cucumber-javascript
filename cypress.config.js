const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/',
    pageLoadTimeout : 10000,
    viewportHeight : 1028,
    viewportWidth : 1920,
    failOnStatusCode: false,
    chromeWebSecurity: false,
    hideXHRInCommandLog: true,
    video:false,
    projectId: "duq8ps",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
    blockHosts: "*mgid.com"
  },
});
