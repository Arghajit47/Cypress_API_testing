/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const tutorialsNinjaUrl = properties.tutorialsNinjaUrl;

describe("Software", () => {
  it("Get Software", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=17`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/GetResponseSoftware.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
});
