/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const tutorialsNinjaUrl = properties.tutorialsNinjaUrl;

describe("Cameras", () => {
  it("Get Cameras", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=33`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/Cameras/GetResponseCameras.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
});
