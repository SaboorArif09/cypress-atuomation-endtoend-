const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
  // implement node event listeners here
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  return config;
}


module.exports = defineConfig({
  reporter: 'mochawesome',
  video: false,
  env: {
    url : "https://rahulshettyacademy.com"
  },
  retries:{
    runMode : 1
  },
  projectId: "kaea3z",
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/**/*.{js,feature}'

  },
});
