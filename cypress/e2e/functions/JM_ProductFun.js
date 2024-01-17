import JM_ProductsPage from "../pages/JM_ProductsPage";

class JM_ProductFun extends JM_ProductsPage {
  clickProductsSubcategory(subCategoryName) {
    this.ProductsSubcategory(subCategoryName).click({ force: true });
    cy.get("h4").contains(`${subCategoryName}`).should("exist");
  }

  getCategoryID(categoryOrder) {
    if (categoryOrder == 0) {
      return "70332";
    }
    if (categoryOrder == 1) {
      return "68928";
    }
  }
}

export default JM_ProductFun;
