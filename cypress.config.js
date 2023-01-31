const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

const xlsx = require('node-xlsx').default; // calling xlsx plugin explicitly
const fs = require('fs');  // for file
const path = require('path');  // for file path
module.exports =  defineConfig({
  projectId: 'vovyki', //  Ancien project id : irft2c
// ***********************************************
  e2e: {
  // specPattern :'cypress/e2e/AllSpecPattern.cy.js',
    setupNodeEvents(on, config) {
      
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
      allureWriter(on, config);
      return config;
    },
},
})
// ***********************************************
