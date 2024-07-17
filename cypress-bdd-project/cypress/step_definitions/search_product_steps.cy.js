import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
const api = require('../../page_objects/api');

Given('the user sends a GET request to search for {string}', (product) => {
  ApiHelper.searchProduct(product);
});

Then('the response status should be 200', () => {
  ApiHelper.verifyStatusCode(200);
});

Then('the response should contain products related to {string}', (product) => {
  ApiHelper.verifyProductInResponse(product);
});
