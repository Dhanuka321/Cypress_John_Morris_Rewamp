import JM_ProductFun from "../functions/JM_ProductFun";

describe("Products_And_SubCategories", () => {
  // Run Command npm run cypress-dashboard
  //This is wrriten for John Morris Live Enviroment (https://www.johnmorrisgroup.com/)
  let products = new JM_ProductFun();

  let labortarySubCategoryList;
  let foodAndFeedSubCategoryList;
  let environmentalSubCategoryList;
  let educationSubCategoryList;
  let industrialSubCategoryList;
  let clinicalSubCategoryList;
  let petrochemicalSubCategoryList;
  let testAndMeasurmentSubCategoryList;
  let subCategoryIDs = [
    "68277",
    "70388",
    "68050",
    "70372",
    "68180",
    "70366",
    "68928",
    "70332",
  ];
  before(() => {
    //get Labortary Sub Category List //424
    cy.request(
      `https://www.johnmorrisgroup.com/api/sub-categories?categoryId=${subCategoryIDs[0]}`
    ).then((subcategoryList) => {
      labortarySubCategoryList = subcategoryList;
      cy.log(labortarySubCategoryList.body.length);
    });

    //get Food and Feed Sub Category List  //20
    cy.request(
      `https://www.johnmorrisgroup.com/api/sub-categories?categoryId=${subCategoryIDs[1]}`
    ).then((subcategoryList) => {
      foodAndFeedSubCategoryList = subcategoryList;
      cy.log(foodAndFeedSubCategoryList.body.length);
    });

    //get environmental Sub Category List //34
    cy.request(
      `https://www.johnmorrisgroup.com/api/sub-categories?categoryId=${subCategoryIDs[2]}`
    ).then((subcategoryList) => {
      environmentalSubCategoryList = subcategoryList;
      cy.log(environmentalSubCategoryList.body.length);
    });

    //get Educattion Sub Category List 1
    cy.request(
      `https://www.johnmorrisgroup.com/api/sub-categories?categoryId=${subCategoryIDs[3]}`
    ).then((subcategoryList) => {
      educationSubCategoryList = subcategoryList;
      cy.log(educationSubCategoryList.body.length);
    });

    //get Industrial Sub Category List 164
    cy.request(
      `https://www.johnmorrisgroup.com/api/sub-categories?categoryId=${subCategoryIDs[4]}`
    ).then((subcategoryList) => {
      industrialSubCategoryList = subcategoryList;
      cy.log(industrialSubCategoryList.body.length);
    });

    //get Clinical Sub Category List 16
    cy.request(
      `https://www.johnmorrisgroup.com/api/sub-categories?categoryId=${subCategoryIDs[5]}`
    ).then((subcategoryList) => {
      clinicalSubCategoryList = subcategoryList;
      cy.log(clinicalSubCategoryList.body.length);
    });

    //get Petrochemical Sub Category List 2
    cy.request(
      `https://www.johnmorrisgroup.com/api/sub-categories?categoryId=${subCategoryIDs[6]}`
    ).then((subcategoryList) => {
      petrochemicalSubCategoryList = subcategoryList;
      cy.log(petrochemicalSubCategoryList.body.length);
    });

    //get Test And Measurement Sub Category List 22
    cy.request(
      `https://www.johnmorrisgroup.com/api/sub-categories?categoryId=${subCategoryIDs[7]}`
    ).then((subcategoryList) => {
      testAndMeasurmentSubCategoryList = subcategoryList;
      cy.log(testAndMeasurmentSubCategoryList.body.length);
    });
  });

  //Loop through sub categories and verify
  for (let j = 0; j < subCategoryIDs.length; j++) {
    if (j == 0) {
      for (let i = 0; i < 1; i++) {
        it(`education__ ${i}__`, () => {
          cy.viewport(1300, 660);

          cy.visit(
            `https://www.johnmorrisgroup.com/products/test-and-measurement?categoryId=${subCategoryIDs[3]}`
          );
          products.clickProductsSubcategory(
            educationSubCategoryList.body[i].name
          );
          cy.clearCookies();
        });
      }
    }
    if (j == 1) {
      for (let i = 0; i < 2; i++) {
        it(`petrochemical__ ${i}__`, () => {
          cy.viewport(1300, 660);

          cy.visit(
            `https://www.johnmorrisgroup.com/products/test-and-measurement?categoryId=${subCategoryIDs[6]}`
          );
          products.clickProductsSubcategory(
            petrochemicalSubCategoryList.body[i].name
          );
          cy.clearCookies();
        });
      }
    }
  }
});
