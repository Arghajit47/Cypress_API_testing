/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

const accessToken = properties.accesstoken;
const BaseUrl = properties.BaseUrl;
const lastName = properties.lastName;
const firstName = properties.firstName;

describe("Post API User Test", () => {
  it("should create users", () => {
    cy.request({
      method: "POST",
      url: BaseUrl,
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      body: {
        name: `${firstName} ${lastName}`,
        email: `${firstName}${lastName}@gmail.com`,
        gender: "male",
        status: "active",
      },
    }).then((response) => {
      cy.writeFile(
        "cypress/fixtures/GoRest/responsePostUser.json",
        response.body
      );
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id");
      expect(response.body).has.property(
        "email",
        `${firstName}${lastName}@gmail.com`
      );
      expect(response.body).has.property("name", `${firstName} ${lastName}`);
      expect(response.body).has.property("gender", "male");
      expect(response.body).has.property("status", "active");
    });
  });

  it("should return newly created user with Id", () => {
    cy.fixture("GoRest/responsePostUser.json").then((user) => {
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
});
