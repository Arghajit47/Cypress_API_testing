/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const tutorialsNinjaUrl = properties.tutorialsNinjaUrl;

describe("Laptop", () => {
  it("Get Laptop page", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=18`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/GetResponseLaptopPage.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get Laptops-MAC page", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=18_46`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/GetResponseLaptopMAC.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get Laptop-Windows page", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=18_45`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/GetResponseLaptopsWindows.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
});
