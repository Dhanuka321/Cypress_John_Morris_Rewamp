class JM_UserRegisterAUPage {
  clickSignInButton() {
    let element = cy.xpath(`//span[text()='Sign In']`);
    return element;
  }

  clickRegisterButton() {
    let element = cy.xpath(`//span[text()='Register']`);
    return element;
  }

  fisrtNameField() {
    let element = cy.xpath(`//input[@name='firstName']`);
    return element;
  }

  lastNameField() {
    let element = cy.xpath(`//input[@name='lastName']`);
    return element;
  }

  organizationName() {
    let element = cy.xpath(`//input[@name='organizationName']`);
    return element;
  }
  phoneNumberField() {
    let element = cy.xpath(`//input[@name='phone']`);
    return element;
  }
  emailField() {
    let element = cy.xpath(
      `//input[@name='email'][@placeholder='john.doe@example.com']`
    );
    return element;
  }
  passwordField() {
    let element = cy.xpath(`//input[@name='password']`);
    return element;
  }
  clickreCaptcha() {
    let element = cy.xpath(`//div[@class='recaptcha-checkbox-border']`);
    return element;
  }
  registrationButton() {
    let element = cy.xpath(`//span[text()='Register']`);
    return element;
  }
}

export default JM_UserRegisterAUPage;
