import testDataFile from "../../fixtures/testData/JM_MainSearchData.json";
import JM_MainSearchFun from "../functions/JM_MainSearchFun";

describe("SearchProducts", () => {
  let skuID = "";

  before(() => {
    let dataSet = JSON.parse(JSON.stringify(testDataFile));
    skuID = dataSet.skuID;
    cy.log(dataSet.skuID);
  });

  it.only("SearchRandomProductsBySKU", () => {
    cy.viewport(1300, 660);
    cy.visit("https://au.jm-dev.store/");
    let mainSearch = new JM_MainSearchFun();
    mainSearch.searchProductBySKU();

    // cy.sqlServer("SELECT * FROM dbo.ProductReview").then((users) => {
    //   cy.log(users);
    //   let new_Array = users;
    //   cy.log(new_Array[0][0]);
    // });
  });

  it("Search_Sku", () => {
    cy.viewport(1300, 660);
    cy.visit("https://au.jm-dev.store/");
    cy.wait(3000);
    cy.log("welcome");
    cy.contains("Search").click();
    cy.xpath("//input[@placeholder='Search John Morris...']").type("vghvdd");
  });
});
