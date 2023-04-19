/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const tutorialsNinjaUrl = properties.tutorialsNinjaUrl;

describe("MP3 Players", () => {
  it("Get All MP3 Players", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=34`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/MP3 Players/GetResponseMP3Players.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get All MP3 Players - Test 11", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=34_43`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/MP3 Players/GetResponseMP3PlayersTest11.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get All MP3 Players - Test 12", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=34_44`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/MP3 Players/GetResponseMP3PlayersTest12.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get All MP3 Players - Test 15", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=34_47`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/MP3 Players/GetResponseMP3PlayersTest15.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get All MP3 Players - Test 16", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=34_48`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/MP3 Players/GetResponseMP3PlayersTest16.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get All MP3 Players - Test 17", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=34_49`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/MP3 Players/GetResponseMP3PlayersTest17.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get All MP3 Players - Test 18", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=34_50`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/MP3 Players/GetResponseMP3PlayersTest18.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get All MP3 Players - Test 19", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/category&path=34_51`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/MP3 Players/GetResponseMP3PlayersTest19.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
});
