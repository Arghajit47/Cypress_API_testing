/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const tutorialsNinjaUrl = properties.tutorialsNinjaUrl;

describe("Tablets", () => {
  it("Get Tablets", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=57`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/GetResponseTablets.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
});
