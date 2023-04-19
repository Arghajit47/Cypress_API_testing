/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
/* eslint-disable max-nested-callbacks */

/// <reference types = "Cypress" />

import properties from "../../_utils/properties/index";

import {
  DemoBlazeEyes,
  DemoBlazeHands,
  DemoBlazeDependencies,
} from "../../robots/CommonRobots/demoBlazeRobot";

const demoBlazeHands = new DemoBlazeHands();
const demoBlazeEyes = new DemoBlazeEyes();
const demoBlazedependencies = new DemoBlazeDependencies();

const demoBlazeBaseUrl = properties.DemoBlazeBaseUrl;
const validUserName = properties.validUserName;
const validPassword = properties.validPassword;
const invalidUserName = properties.invalidUserName;
const invalidPassword = properties.invalidPassword;
const contactEmail = properties.contactEmail;
const demoBlazeApi = properties.demoBlazeApi;

describe("UI testing for DemoBlaze Website", () => {
  beforeEach("Visit DemoBlaze Website", () => {
    demoBlazedependencies.visitUrl(demoBlazeBaseUrl);
  });
  it("Check for Home Page expected elements", () => {
    demoBlazeEyes.seesNavBar();
    demoBlazeEyes.seesSlidingProductCard();
    demoBlazeEyes.seesCatagoriesTable();
    demoBlazeEyes.seesProductCards();
    demoBlazeEyes.seesNextAndPreviousButtons();
    demoBlazeEyes.seesAboutUsDetails();
    demoBlazeEyes.seesGetInTouchDetails();
    demoBlazeEyes.seesCopyRightText();
  });
  it("Login with Invalid Credentials", () => {
    demoBlazeHands.clickOnLoginButton();
    demoBlazeEyes.seesLoginModal();
    demoBlazeHands.inputUserNameInLogInModal(invalidUserName);
    demoBlazeHands.inputPasswordInLogInModal(invalidPassword);
    demoBlazeHands.clickOnLoginInModal();
    cy.on("window:confirm", (txt) => {
      expect(txt).to.contains("User does not exist.");
    });
  });
  it("LogIn to DemoBlaze with valid Credentials", () => {
    demoBlazeHands.clickOnLoginButton();
    demoBlazeEyes.seesLoginModal();
    demoBlazeHands.inputUserNameInLogInModal(validUserName);
    demoBlazeHands.inputPasswordInLogInModal(validPassword);
    demoBlazeHands.clickOnLoginInModal();
    demoBlazeEyes.seesLoggedInUserName(validUserName);
  });
  it("Checking Contact option functionality", () => {
    demoBlazeHands.clickOnContactButton();
    demoBlazeEyes.seesContactModal();
    demoBlazeHands.inputRequiredFieldsInContactModal(
      contactEmail,
      validUserName
    );
    demoBlazeHands.clickOnSendMessageButton();
    cy.on("window:confirm", (txt) => {
      expect(txt).to.contains("Thanks for the message!!");
    });
  });
  it("Checking About us option functionality", () => {
    demoBlazeHands.clickOnAboutUsButton();
    demoBlazeEyes.seesAboutUsModal();
  });
  it("Add to Cart the 4th Phone", () => {
    demoBlazeHands.clickOnLoginButton();
    demoBlazeEyes.seesLoginModal();
    demoBlazeHands.inputUserNameInLogInModal(validUserName);
    demoBlazeHands.inputPasswordInLogInModal(validPassword);
    demoBlazeHands.clickOnLoginInModal();
    demoBlazeEyes.seesLoggedInUserName(validUserName);
    cy.intercept("POST", demoBlazeApi + "bycat").as("graphqlRequest");
    demoBlazeHands.clickOnPhonesCatagory();
    cy.wait("@graphqlRequest", { timeout: 80000 }).then(() => {
      demoBlazeEyes.seesPhoneCards();
      cy.intercept("POST", demoBlazeApi + "view").as("graphqlRequest");
      demoBlazeHands.clickOnPhone();
      cy.wait("@graphqlRequest", { timeout: 80000 }).then(({ response }) => {
        if (response.statusCode == 200) {
          demoBlazeEyes.seesPhonePageElements();
          demoBlazeHands.clickOnAddToCartButton();
          cy.on("window:confirm", (txt) => {
            expect(txt).to.contains("Product added");
          });
          cy.intercept("POST", demoBlazeApi + "viewcart").as("graphqlRequest");
          demoBlazeHands.clickOnCartButton();
          cy.wait("@graphqlRequest", { timeout: 80000 }).then(
            ({ response }) => {
              if (response.statusCode == 200) {
                demoBlazeEyes.seesCartPageElements();
              } else {
                cy.log("API response error: " + response.statusCode);
              }
            }
          );
        } else {
          cy.log("API response error: " + response.statusCode);
        }
      });
    });
    demoBlazeHands.clickOnHomeButton();
  });
  it("Place Order", () => {
    demoBlazeHands.clickOnLoginButton();
    demoBlazeEyes.seesLoginModal();
    demoBlazeHands.inputUserNameInLogInModal(validUserName);
    demoBlazeHands.inputPasswordInLogInModal(validPassword);
    demoBlazeHands.clickOnLoginInModal();
    demoBlazeEyes.seesLoggedInUserName(validUserName);
    cy.intercept("POST", demoBlazeApi + "viewcart").as("graphqlRequest");
    demoBlazeHands.clickOnCartButton();
    cy.wait("@graphqlRequest", { timeout: 80000 }).then(({ response }) => {
      if (response.statusCode == 200) {
        demoBlazeEyes.seesCartPageElements();
        demoBlazeHands.clickOnPlaceOrderButton();
        demoBlazeEyes.seesPlaceOrderElements();
        demoBlazeHands.inputPlaceOrderRequiredFields(validUserName);
        demoBlazeEyes.seesOrderedSuccessfullyPopUp();
      } else {
        cy.log("API response error: " + response.statusCode);
      }
    });
  });
});
