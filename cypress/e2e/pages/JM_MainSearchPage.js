class JM_MainSearchPage {
  //Search button Main Page
  searchButtonElement() {
    let element = cy.xpath("//span[text()='Search']");
    return element;
  }
}

export default JM_MainSearchPage;
