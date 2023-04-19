/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
/* eslint-disable max-nested-callbacks */

import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";

export class DemoBlazeEyes extends BaseEyes {
  seesNavBar() {
    this.seesDomVisible('a[id="nava"]');
    this.seesDomWithIndex('div[id="navbarExample"] > ul > li > a', 0);
    this.seesDomVisible('li > a[data-target="#exampleModal"]');
    this.seesDomVisible('li > a[data-target="#videoModal"]');
    this.seesDomVisible('li > a[id="cartur"]');
    this.seesDomVisible('li > a[id="login2"]');
    this.seesDomVisible('li > a[id="signin2"]');
  }
  seesSlidingProductCard() {
    this.seesDomVisible('div[id="contcar"]');
    this.seesDomEnabled('a[data-slide="prev"]');
    this.seesDomEnabled('a[data-slide="next"]');
  }
  seesCatagoriesTable() {
    this.seesDomVisible('a[id="cat"]');
    this.seesDomWithIndex('a[id="itemc"]', 0);
    this.seesDomWithIndex('a[id="itemc"]', 1);
    this.seesDomWithIndex('a[id="itemc"]', 2);
  }
  seesProductCards() {
    for (var i = 0; i < 9; i++) {
      this.seesDomWithIndex('div[id="tbodyid"] > div > div > a', i);
    }
  }
  seesNextAndPreviousButtons() {
    this.seesDomVisible('button[id="prev2"]');
    this.seesDomVisible('button[id="next2"]');
  }
  seesAboutUsDetails() {
    this.seesDomContainTextValue("div > h4 > b", "About Us");
    this.seesDomContainTextValue(
      "div > p",
      "We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality."
    );
  }
  seesGetInTouchDetails() {
    this.seesDomContainTextValue("div > h4 > b", "Get in Touch");
    this.seesDomContainTextValue("div > p", "Address: 2390 El Camino Real");
    this.seesDomContainTextValue("div > p", "Phone: +440 123456");
    this.seesDomContainTextValue("div > p", "Email: demo@blazemeter.com ");
  }
  seesCopyRightText() {
    this.seesDomContainTextValue(
      "footer > p",
      "Copyright © Product Store 2017"
    );
  }
  seesLoginModal() {
    this.seesDomVisible('div > h5[id="logInModalLabel"]');
    this.seesDomVisible('div > input[id="loginusername"]');
    this.seesDomVisible('div > input[id="loginpassword"]');
    this.seesDomContainTextValue(
      'button[class="btn btn-secondary"][data-dismiss="modal"]',
      "Close"
    );
    this.seesDomContainTextValue('button[onclick="logIn()"]', "Log in");
  }
  seesLoggedInUserName(userName: string) {
    this.seesDomContainText('li > a[id="nameofuser"]', `Welcome ${userName}`);
  }
  seesContactModal() {
    this.seesDomContainTextValue('h5[id="exampleModalLabel"]', "New message");
    this.seesDomVisible('input[id="recipient-email"]');
    this.seesDomVisible('input[id="recipient-name"]');
    this.seesDomVisible('textarea[id="message-text"]');
    this.seesDomContainTextValue(
      'button[class="btn btn-secondary"][data-dismiss="modal"]',
      "Close"
    );
    this.seesDomContainTextValue('button[onclick="send()"]', "Send message");
  }
  seesAboutUsModal() {
    this.seesDomContainTextValue('div > h5[id="videoModalLabel"]', "About us");
    this.seesDomVisible('div[id="example-video"]');
    this.seesDomContainTextValue(
      'button[class="btn btn-secondary"][data-dismiss="modal"]',
      "Close"
    );
  }
  seesPhoneCards() {
    for (var i = 0; i < 7; i++) {
      this.seesDomWithIndex('div[id="tbodyid"] > div > div > a', i);
    }
  }
  seesPhonePageElements() {
    this.seesDomVisible('div[id="imgp"]');
    this.seesDomVisible('div[id="tbodyid"]> h2');
    this.seesDomVisible('div[id="tbodyid"]> h3');
    this.seesDomVisible('div[id="myTabContent"]');
    this.seesDomVisible('div > a[onclick="addToCart(4)"]');
  }
  seesCartPageElements() {
    this.seesDomContainTextValue("div >table> thead> tr > th", "Pic");
    this.seesDomContainTextValue("div >table> thead> tr > th", "Title");
    this.seesDomContainTextValue("div >table> thead> tr > th", "Price");
    this.seesDomContainTextValue("div >table> thead> tr > th", "x");
    this.seesDomContainTextValue("div >table> tbody> tr > td > a", "Delete");
    this.seesDomEnabled('button[data-target="#orderModal"]');
  }
  seesPlaceOrderElements() {
    this.seesDomVisible('div > h5[id="orderModalLabel"]');
    this.seesDomVisible('label[id="totalm"]');
    this.seesDomVisible('input[id="name"]');
    this.seesDomVisible('input[id="country"]');
    this.seesDomVisible('input[id="city"]');
    this.seesDomVisible('input[id="card"]');
    this.seesDomVisible('input[id="month"]');
    this.seesDomVisible('input[id="year"]');
    this.seesDomContainTextValue(
      'button[class="btn btn-secondary"][data-dismiss="modal"]',
      "Close"
    );
    this.seesDomEnabled('button[onclick="purchaseOrder()"]');
  }
  seesOrderedSuccessfullyPopUp() {
    this.seesDomContainTextValue("div > h2", "Thank you for your purchase!");
    this.seesDomVisible('div[class="sa-confirm-button-container"] > button');
  }
}

export class DemoBlazeHands extends BaseHands {
  clickOnLoginButton() {
    this.clickOnDomElement('li > a[id="login2"]');
  }
  clickOnLoginInModal() {
    this.clickOnDomElement('button[onclick="logIn()"]');
  }
  inputUserNameInLogInModal(userName: string) {
    this.typeTextonDom('div > input[id="loginusername"]', userName);
  }
  inputPasswordInLogInModal(password: string) {
    this.typeTextonDom('div > input[id="loginpassword"]', password);
  }
  clickOnContactButton() {
    this.clickOnDomElement('li > a[data-target="#exampleModal"]');
  }
  inputRequiredFieldsInContactModal(mail: string, name: string) {
    this.typeTextonDom('input[id="recipient-email"]', mail);
    this.typeTextonDom('input[id="recipient-name"]', name);
    this.typeTextonDom('textarea[id="message-text"]', "Hello world!");
  }
  clickOnSendMessageButton() {
    this.clickOnDomElement('button[onclick="send()"]');
  }
  clickOnAboutUsButton() {
    this.clickOnDomElement('li > a[data-target="#videoModal"]');
  }
  clickOnPhonesCatagory() {
    this.clickOnDomElement(`a[onclick="byCat('phone')"]`);
  }
  clickOnPhone() {
    this.clickOnDomElementWithIndex('div[id="tbodyid"] > div > div > a', 3);
  }
  clickOnAddToCartButton() {
    this.clickOnDomElement('div > a[onclick="addToCart(4)"]');
  }
  clickOnHomeButton() {
    this.clickOnDomElementWithIndex('div[id="navbarExample"] > ul > li > a', 0);
  }
  clickOnCartButton() {
    this.clickOnDomElement('li > a[id="cartur"]');
  }
  clickOnPlaceOrderButton() {
    this.clickOnDomElement('button[data-target="#orderModal"]');
  }
  inputPlaceOrderRequiredFields(userName: string) {
    this.typeTextonDom('input[id="name"]', userName);
    this.typeTextonDom('input[id="country"]', "India");
    this.typeTextonDom('input[id="city"]', "Hyderabad");
    this.typeTextonDom('input[id="card"]', "1234567891011121");
    this.typeTextonDom('input[id="month"]', "November");
    this.typeTextonDom('input[id="year"]', "2023");
    this.clickOnDomElement('button[onclick="purchaseOrder()"]');
  }
}

export class DemoBlazeDependencies extends BaseDependencies {}
