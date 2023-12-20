import testDataFile from "../fixtures/testData/JM_MainSearchData.json";

describe("template spec", () => {
  let testdata;

  before(() => {
    cy.fixture("testData\\JM_MainSearchData.json").then((data) => {
      testdata = data;
    });
  });

  it.only("passes", () => {
    cy.viewport(1300, 660);
    cy.visit("/"); //Defined Base Url inside the cypress.confij.js file
    let obj = JSON.parse(JSON.stringify(testDataFile));
    cy.log(obj.Username);

    cy.sqlServer("SELECT * FROM dbo.ProductReview").then((users) => {
      cy.log(users);

      //let new_Array = users;
      //cy.log(new_Array[0][0]);
    });
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
