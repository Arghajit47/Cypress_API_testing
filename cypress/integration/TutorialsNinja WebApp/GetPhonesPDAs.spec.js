/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const tutorialsNinjaUrl = properties.tutorialsNinjaUrl;

describe("Phones & PDAs", () => {
  it("Get Phones and PDAs", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=24`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/GetResponsePhonesAndPDAs.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
});
