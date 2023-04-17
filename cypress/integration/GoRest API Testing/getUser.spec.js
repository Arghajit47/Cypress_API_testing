/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const accessToken = properties.accesstoken;
const BaseUrl = properties.BaseUrl;

describe("Get API User Test", () => {
  it("should return users", () => {
    cy.request({
      method: "GET",
      url: BaseUrl,
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/GoRest/responseGetUser.json",
        response.body
      );
      expect(response.status).to.eq(200);
    });
  });

  it("should return user with Id", () => {
    cy.fixture("GoRest/responseGetUser.json").then((user) => {
      const Id = user[0].id;
      const name = user[0].name;
      cy.request({
        method: "GET",
        url: `${BaseUrl}/${Id}`,
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(name);
      });
    });
  });
});
