/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const tutorialsNinjaUrl = properties.tutorialsNinjaUrl;

describe("Brand", () => {
  it("Get Brand - Hewlett Packard", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/manufacturer/info&manufacturer_id=7`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/Brand/GetResponseBrandHP.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Get Brand - Hewlett Packard (HP LP3065)", () => {
    cy.request({
      method: "GET",
      url: `${tutorialsNinjaUrl}?route=product/manufacturer/info&manufacturer_id=7`,
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/Brand/GetResponseBrandHPLP3065.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Add to Wishlist Brand - Hewlett Packard (HP LP3065)", () => {
    cy.request({
      method: "POST",
      url: `${tutorialsNinjaUrl}?route=account/wish list/add`,
      body: {
        product_id: 47,
      },
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/Brand/PostResponseAddToWishlistHPLP3065.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
  it("Add review Brand - Hewlett Packard (HP LP3065)", () => {
    cy.request({
      method: "POST",
      url: `${tutorialsNinjaUrl}?route=product/product/write&product_id=47 `,
      body: {
        name: "Arghajit Singha",
        text: "In purpose of doing  API Testing I'm writting this comment",
        rating: 5,
      },
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/tutorialsNinja/Brand/PostResponseAddReviewHPLP3065.html",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });
});
