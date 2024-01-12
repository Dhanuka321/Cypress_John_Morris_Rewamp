class JM_ProductsPage {
  ProductsSubcategory(subCategoryName) {
    let element = cy.xpath(`//span[text()='${subCategoryName}']`);
    return element;
  }
}

export default JM_ProductsPage;
