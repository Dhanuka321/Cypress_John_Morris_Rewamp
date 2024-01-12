import JM_ProductsPage from "../pages/JM_ProductsPage";

class JM_ProductFun extends JM_ProductsPage {
  clickProductsSubcategory(subCategoryName) {
    this.ProductsSubcategory(subCategoryName).click({ force: true });
    cy.get("h4").contains(`${subCategoryName}`).should("exist");
  }
}

export default JM_ProductFun;
