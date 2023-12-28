class JM_MainSearchPage {
  //Search button Main Page
  searchButtonElement() {
    let element = cy.xpath("//span[text()='Search']");
    return element;
  }

  searchFieldArea() {
    let element = cy.xpath("//input[@placeholder='Search John Morris...']");
    return element;
  }

  clickOnSearchedProduct(skuId) {
    let element = cy.xpath(
      `//span[text()='${skuId}'][@class='flex flex-1 pb-[1px] leading-[1]']`
    );
    return element;

    // let element = cy.xpath(`//h6[text()='${productName}']`);
    // return element;
  }

  pngOfSearchedProduct() {
    let element = cy.xpath(
      "//div[@class='flex h-[48px] w-[48px] shrink-0 rounded-sm border bg-white p-1']"
    );
    return element;
  }
}

export default JM_MainSearchPage;
