import JM_UserRegisterAUPage from "../pages/JM_UserRegisterAUPage";
import JM_UserRegistrationData from "../../fixtures/testData/JM_UserRegisterAUData.json";
class JM_UserRegisterAUFun extends JM_UserRegisterAUPage {
  userRegistration() {
    //Click Sign In Button
    this.clickSignInButton().click();
    cy.wait(2000);
    //Click Register Button
    this.clickRegisterButton().click({ force: true });
    //Type FirstName
    this.fisrtNameField().type(
      `TestFirstName_${this.generateRandomNumber(100000)}`
    );
    //Type lastName
    this.lastNameField().type(
      `TestlastName_${this.generateRandomNumber(100000)}`
    );
    //Type organization Name
    this.organizationName().type(
      `Testorganization_${this.generateRandomNumber(100000)}`
    );
    //Type phone number
    this.phoneNumberField().type(this.generateRandomNumber(1000000000));

    //Type email address
    this.emailField().type(
      `Testemail_${this.generateRandomNumber(100000)}@gmail.com`
    );

    //Type Password
    this.passwordField().type(this.getRegistrationData("password"));
    cy.wait(2000);
    //Click Recaptcha
    //this.clickreCaptcha().click({ force: true });
    // cy.get("iframe")
    //   .first()
    //   .its("0.contentDocument.body")
    //   .should("not.be.undefined")
    //   .and("not.be.empty")
    //   .then(cy.wrap)
    //   .find("#recaptcha-anchor")
    //   .should("be.visible")
    //   .click();

    //Click Register Button
    this.registrationButton().click({ force: true });
  }

  getRegistrationData(requireFieldValue) {
    let returnReuireFieldValue = "";
    let dataSet = JSON.parse(JSON.stringify(JM_UserRegistrationData));
    if (requireFieldValue == "password") {
      returnReuireFieldValue = dataSet.password;
    }

    return returnReuireFieldValue;
  }
  generateRandomNumber(range) {
    let randomNumber = Math.random() * range;
    let omitDecimalValues = Math.round(randomNumber);
    return omitDecimalValues;
  }
}

export default JM_UserRegisterAUFun;
