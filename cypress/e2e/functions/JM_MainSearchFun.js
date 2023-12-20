import JM_MainSearchPage from "../pages/JM_MainSearchPage";

class JM_MainSearchFun {
  //Search Product using skuIDs defined inside the JM_MainSearch.json file
  searchProductBySKU() {
    let mainSearchPage = new JM_MainSearchPage();
    let searchElement = mainSearchPage.searchButtonElement();
    searchElement.click();
  }
}

export default JM_MainSearchFun;
