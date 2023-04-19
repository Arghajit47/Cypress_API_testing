/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const tutorialsNinjaUrl = properties.tutorialsNinjaUrl;

describe("Address", () => {
  it("Get All Address", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=account/address`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/Address/GetResponseAllAddress.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
});
