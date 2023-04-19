/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const tutorialsNinjaUrl = properties.tutorialsNinjaUrl;

describe("Components", () => {
  it("Get Components", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=25`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/Components/GetResponseComponents.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get All Components - Mice and Trackballs", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=25_29`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/Components/GetResponseMiceAndTrackballs.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get all Components - Monitors (All)", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=25_28`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/Components/GetResponseMonitors.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get all Components - Monitors (Test 0)", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=25_28_35`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/Components/GetResponseMonitorsTest0.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get all Components - Monitors (Test 1)", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=25_28_36`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/Components/GetResponseGetResponseMonitorsTest1.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get all Components - Printers", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=25_30`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/Components/GetResponsePrinters.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get all Components - Scanners", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=25_31`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/Components/GetResponseScanners.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get all Components - Web Cameras", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=25_32`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/Components/GetResponseWebCameras.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
});
