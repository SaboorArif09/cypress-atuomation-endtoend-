const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url : "https://rahulshettyacademy.com"
  },
  retries:{
    runMode : 1
  },
  projectId: "dbagsv",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   
  },
});
