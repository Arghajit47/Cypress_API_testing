/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const tutorialsNinjaUrl = properties.tutorialsNinjaUrl;

describe("About Us", () => {
  it("Get About Us", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=information/information&information_id=4`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/About Us/GetResponseAboutUs.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
});
