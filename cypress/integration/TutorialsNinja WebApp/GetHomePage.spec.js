/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const tutorialsNinjaUrl = properties.tutorialsNinjaUrl;

describe("Home Page", () => {
  it("Get Webapp Home page", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=common/home`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/GetResponseHomePage.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get Samsung Galaxy Tab 10.1", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/product&path=57&product_id=49`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/GetResponseSamsungGalaxyTab.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get Macbook Details", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/product&product_id=43`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/GetResponseMacbook.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get Iphone Details", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/product&product_id=40`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/GetResponseIPhone.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get Apple Cinema 30 inch Details", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/product&product_id=42`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/GetResponseAppleCinema30inch.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get Cannon EOS 5D Details", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/product&product_id=30`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/GetResponseCannonEOS5D.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
});
