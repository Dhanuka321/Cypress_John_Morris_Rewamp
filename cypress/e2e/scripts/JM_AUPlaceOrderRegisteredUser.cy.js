import JM_MainSearchDataFile from "../../fixtures/testData/JM_MainSearchData.json";
import JM_UserRegisterAUFun from "../functions/JM_UserRegisterAUFun";

describe("Place_Order_By_Registered_User", () => {
  // Run Command npm run cypress-dashboard
  let skuID = "";
  let jm_userRegistrationAU = new JM_UserRegisterAUFun();

  before(() => {
    let dataSet = JSON.parse(JSON.stringify(JM_MainSearchDataFile));
    skuID = dataSet.SKU;
  });

  it("Place_Order_By_Registered_User", () => {
    cy.viewport(1300, 660);
    cy.visit("/");
    jm_userRegistrationAU.userRegistration();
  });
});
