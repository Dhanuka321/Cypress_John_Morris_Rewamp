import JM_MainSearchDataFile from "../../fixtures/testData/JM_MainSearchData.json";
import JM_UserRegisterAUFun from "../functions/JM_UserRegisterAUFun";

describe("Check_All_Brands", () => {
  // Run Command npm run cypress-dashboard
  //This is written for Production Environment
  let allBrandList = [];
  let prodUrl = "https://www.johnmorrisgroup.com/brands";
  let count = 0;

  before(() => {
    //get All Brand List - Current Total Items in Production66
    cy.request("https://www.johnmorrisgroup.com/api/catalogue/brands").then(
      (brandList) => {
        allBrandList = brandList;
        for (let i = 0; i < allBrandList.body.groups.length; i++) {
          for (let j = 0; j < allBrandList.body.groups[i].data.length; j++) {
            count = ++count;
            allBrandList[count] = allBrandList.body.groups[i].data[j].name;
          }
        }

        console.log(allBrandList);
        console.log(count);
      }
    );
  });

  it("Check_All_Brands", () => {
    cy.viewport(1300, 660);
    cy.visit(prodUrl);
  });
});
