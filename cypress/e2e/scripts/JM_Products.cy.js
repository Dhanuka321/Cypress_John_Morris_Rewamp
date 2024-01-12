import JM_ProductFun from "../functions/JM_ProductFun";
import LabortarySubcategories from "../../fixtures/testData/JM_LabortarySubcategories";
import FoodAndFeed from "../../fixtures/testData/JM_FoodAndFeed";
import Environmental from "../../fixtures/testData/JM_Environmental";
import Education from "../../fixtures/testData/JM_Education";
import Industrial from "../../fixtures/testData/JM_Industrial";
import clinical from "../../fixtures/testData/JM_Clinical";
import Petrochemical from "../../fixtures/testData/JM_PetroChemical";
import TestAndMeasurement from "../../fixtures/testData/JM_TestAndMeasurement";

describe("Products_And_SubCategories", () => {
  let products = new JM_ProductFun();

  before(() => {});

  //Click all Labortary Subcategories
  for (let i = 0; i < LabortarySubcategories.length; i++) {
    xit(`Check_Product_Labortary_Sub_Category_${i} ${LabortarySubcategories[i].name}`, () => {
      cy.viewport(1300, 660);

      cy.visit(
        "https://www.johnmorrisgroup.com/products/laboratory?categoryId=68277"
      );
      products.clickProductsSubcategory(LabortarySubcategories[i].name);
      cy.clearCookies();
    });
  }

  for (let i = 0; i < FoodAndFeed.length; i++) {
    it(`Check_Product_Food_And_Feed_Sub_Category_${i} ${FoodAndFeed[i].name}`, () => {
      cy.viewport(1300, 660);

      cy.visit(
        "https://www.johnmorrisgroup.com/products/food-and-feed?categoryId=70388"
      );
      products.clickProductsSubcategory(FoodAndFeed[i].name);
      cy.clearCookies();
    });
  }

  //Click all Food And Feed Subcategories
  for (let i = 0; i < FoodAndFeed.length; i++) {
    it(`Check_Product_Food_And_Feed_Sub_Category_${i} ${FoodAndFeed[i].name}`, () => {
      cy.viewport(1300, 660);

      cy.visit(
        "https://www.johnmorrisgroup.com/products/food-and-feed?categoryId=70388"
      );
      products.clickProductsSubcategory(FoodAndFeed[i].name);
      cy.clearCookies();
    });
  }
  //Click all Environmental Subcategories
  for (let i = 0; i < Environmental.length; i++) {
    it(`Check_Product_Environmental_Sub_Category_${i} ${Environmental[i].name}`, () => {
      cy.viewport(1300, 660);

      cy.visit(
        "https://www.johnmorrisgroup.com/products/environmental?categoryId=68050"
      );
      products.clickProductsSubcategory(Environmental[i].name);
      cy.clearCookies();
    });
  }
  //Click all Education Subcategories
  for (let i = 0; i < Environmental.length; i++) {
    it(`Check_Product_Education_Sub_Category_${i} ${Education[i].name}`, () => {
      cy.viewport(1300, 660);

      cy.visit(
        "https://www.johnmorrisgroup.com/products/education?categoryId=70372"
      );
      products.clickProductsSubcategory(Education[i].name);
      cy.clearCookies();
    });
  }
  //Click all Industrial Subcategories
  for (let i = 0; i < Industrial.length; i++) {
    it(`Check_Product_Industrial_Sub_Category_${i} ${Industrial[i].name}`, () => {
      cy.viewport(1300, 660);

      cy.visit(
        "https://www.johnmorrisgroup.com/products/industrial?categoryId=68180"
      );
      products.clickProductsSubcategory(Industrial[i].name);
      cy.clearCookies();
    });
  }
  //Click all clinical Subcategories
  for (let i = 0; i < clinical.length; i++) {
    it(`Check_Product_Industrial_Sub_Category_${i} ${clinical[i].name}`, () => {
      cy.viewport(1300, 660);

      cy.visit(
        "https://www.johnmorrisgroup.com/products/clinical?categoryId=70366"
      );
      products.clickProductsSubcategory(clinical[i].name);
      cy.clearCookies();
    });
  }

  //Click all Petrochemical Subcategories
  for (let i = 0; i < Petrochemical.length; i++) {
    it(`Check_Product_Petrochemical_Sub_Category_${i} ${Petrochemical[i].name}`, () => {
      cy.viewport(1300, 660);

      cy.visit(
        "https://www.johnmorrisgroup.com/products/petrochemical?categoryId=68928"
      );
      products.clickProductsSubcategory(Petrochemical[i].name);
      cy.clearCookies();
    });
  }

  //Click all TestAndMeasurement Subcategories
  for (let i = 0; i < TestAndMeasurement.length; i++) {
    it(`Check_Product_TestAndMeasurement_Sub_Category_${i} ${TestAndMeasurement[i].name}`, () => {
      cy.viewport(1300, 660);

      cy.visit(
        "https://www.johnmorrisgroup.com/products/test-and-measurement?categoryId=70332"
      );
      products.clickProductsSubcategory(TestAndMeasurement[i].name);
      cy.clearCookies();
    });
  }
});
