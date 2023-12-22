import JM_MainSearchPage from "../pages/JM_MainSearchPage";

class JM_MainSearchFun extends JM_MainSearchPage {
  searchProductByParticularSKU(skuId) {
    //Search Product using skuIDs defined inside the JM_MainSearch.json file
    //Click main search button
    let searchElement = this.searchButtonElement();
    searchElement.click();

    //Type sku on search field
    let searchArea = this.searchFieldArea();
    searchArea.type(skuId);
  }

  searchProductByRandomSkuID() {
    //Click main search button
    let searchElement = this.searchButtonElement();
    searchElement.click();

    cy.sqlServer(
      "SELECT TOP 1 * FROM Product " +
        "WHERE ProductTypeId = 5 AND Published = 1 AND Deleted = 0 ORDER BY NEWID()"
    ).then((productDetails) => {
      let skuId = productDetails[21];
      let productName = productDetails[4];
      //Type sku on search field
      let searchArea = this.searchFieldArea();
      searchArea.type(skuId);

      cy.wait(3000);
      //Click on Searched Product
      let searchedProduct = this.clickOnSearchedProduct(productName);
      searchedProduct.click();
      cy.wait(2000);
      // cy.log(productDetails[4]); // name
      // cy.log(productDetails[5]); // short description
      // cy.log(productDetails[12]); //meta description
      // cy.log(productDetails[13]); // meta title
      // cy.log(productDetails[21]); // sku
    });
  }

  checkSecrhedProductCount(skuId) {
    //Click main search button
    let searchElement = this.searchButtonElement();
    searchElement.click();

    //Type sku on search field
    let searchArea = this.searchFieldArea();
    searchArea.type(skuId);

    //Check the count of searched result
    let pngofSearchedProduct = this.pngOfSearchedProduct();
    pngofSearchedProduct.should("have.length", 1);
  }
}

export default JM_MainSearchFun;
