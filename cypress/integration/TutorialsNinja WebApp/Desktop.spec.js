/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const tutorialsNinjaUrl = properties.tutorialsNinjaUrl;

describe("Desktop", () => {
  it("Get Desktop page", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=20`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/Desktop/GetResponseDesktopPage.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get Desktop-PC page", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=20_26`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/Desktop/GetResponseDesktopPC.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get Desktop-MAC page", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=20_27`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/Desktop/GetResponseDesktopMAC.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
});
