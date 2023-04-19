const properties = {
  accesstoken: Cypress.config().accesstoken,
  firstName: Cypress.config().firstName,
  lastName: Cypress.config().lastName,
  middleName: Cypress.config().middleName,
  BaseUrl: Cypress.config().BaseUrl,
  tutorialsNinjaUrl: Cypress.config().tutorialsNinjaUrl,
  DemoBlazeBaseUrl: Cypress.config().DemoBlazeBaseUrl,
  validUserName: Cypress.config().validUserName,
  validPassword: Cypress.config().validPassword,
  invalidUserName: Cypress.config().invalidUserName,
  invalidPassword: Cypress.config().invalidPassword,
  contactEmail: Cypress.config().ContactEmail,
  demoBlazeApi: Cypress.config().DemoBlazeApi,
};

export default properties;
