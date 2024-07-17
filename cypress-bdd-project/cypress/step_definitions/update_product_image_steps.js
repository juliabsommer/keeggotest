import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const api = require('../../page_objects/api');

Given('the user is authenticated', () => {
  ApiHelper.authenticateUser();
});

When('the user sends a PUT request to update the product image', () => {
  ApiHelper.updateProductImage();
});

Then('the response status should be {int}', (statusCode) => {
  ApiHelper.verifyStatusCode(statusCode);
});

Then('the response should contain the new image ID', () => {
  ApiHelper.verifyNewImageId();
});

Then('the response should have reason and success fields', () => {
  ApiHelper.verifyReasonAndSuccess();
});
