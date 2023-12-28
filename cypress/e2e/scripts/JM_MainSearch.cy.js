import JM_MainSearchDataFile from "../../fixtures/testData/JM_MainSearchData.json";
import JM_MainSearchFun from "../functions/JM_MainSearchFun";

describe("SearchProducts", () => {
  let skuID = "";
  let mainSearch = new JM_MainSearchFun();

  before(() => {
    let dataSet = JSON.parse(JSON.stringify(JM_MainSearchDataFile));
    skuID = dataSet.SKU;
  });

  it("Search_Random_Products_By_SKU", () => {
    cy.viewport(1300, 660);

    for (let i = 0; i < 10; i++) {
      cy.visit("/");
      mainSearch.searchProductByRandomSkuID();
    }
  });

  it("Search_Products_By_Particular_SKU", () => {
    cy.viewport(1300, 660);
    cy.visit("/");
    mainSearch.searchProductByParticularSKU(skuID);
  });

  it("Searched_Product_Count_By_Random_SKU", () => {
    cy.viewport(1300, 660);
    for (let i = 0; i < 10; i++) {
      cy.visit("/");
      mainSearch.checkSecrhedProductCount();
    }
  });
  it.only("check_Product_Published_And_Deleted", () => {
    cy.viewport(1300, 660);
    for (let i = 0; i < 10; i++) {
      cy.visit("/");
      mainSearch.checkPublishedAndDeleted();
    }
  });
});
