/// <reference types="cypress" />
import data from "./api.json";

data.forEach(function (data, i) {
  it(`healthplan-api: ${i}`, () => {
    cy.request({
      method: data.method,
      url: data.endpoint,
      qs: data.parameters,
    }).then((response) => {
      expect(response.status).to.eq(data.status);
    });
  });
});
