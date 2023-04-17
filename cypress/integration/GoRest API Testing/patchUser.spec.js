/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const accessToken = properties.accesstoken;
const BaseUrl = properties.BaseUrl;
const lastName = properties.lastName;
const firstName = properties.firstName;
const middleName = properties.middleName;

describe("Patch API User Test", () => {
  it("should return newly updated user with Id", () => {
    cy.fixture("GoRest/responsePutUser.json").then((user) => {
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

  it("should update newly updated users", () => {
    cy.fixture("GoRest/responsePutUser.json").then((user) => {
      const Id = user.id;
      const name = user.name;
      cy.request({
        method: "PATCH",
        url: `${BaseUrl}/${Id}`,
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        body: {
          name: `${firstName} ${middleName} ${lastName}`,
          email: `${firstName}${middleName}${lastName}@gmail.com`,
          gender: "male",
          status: "inactive",
        },
      }).then((response) => {
        cy.writeFile(
          "cypress/fixtures/GoRest/responsePatchUser.json",
          response.body
        );
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("id");
        expect(response.body).has.property(
          "email",
          `${firstName}${middleName}${lastName}@gmail.com`
        );
        expect(response.body).has.property(
          "name",
          `${firstName} ${middleName} ${lastName}`
        );
        expect(response.body).has.property("gender", "male");
        expect(response.body).has.property("status", "inactive");
      });
    });
  });
});
