/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const accessToken = properties.accesstoken;
const BaseUrl = properties.BaseUrl;

describe("Delete API User Test", () => {
  it("should return newly updated user with Id", () => {
    cy.fixture("GoRest/responsePatchUser.json").then((user) => {
      const Id = user.id;
      const name = user.name;
      cy.request({
        method: "GET",
        url: `${BaseUrl}/${Id}`,
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }).then((response) => {
        cy.log(response);
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(name);
      });
    });
  });

  it("should delete newly updated users", () => {
    cy.fixture("GoRest/responsePutUser.json").then((user) => {
      const Id = user.id;
      const name = user.name;
      cy.request({
        method: "DELETE",
        url: `${BaseUrl}/${Id}`,
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }).then((response) => {
        cy.writeFile(
          "cypress/fixtures/GoRest/responseDeleteUser.json",
          response.body
        );
        expect(response.status).to.eq(204);
      });
    });
  });
});
