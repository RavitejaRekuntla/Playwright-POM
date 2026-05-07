import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage.js";
import logger from "../Utils/Logger.spec.js";
import data from "../Testdata/LoginTestData.json";

test.describe("Login Tests", () => {
  let login;
  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    await login.goto(data.Url.data);
  });

  test("Invalid Login", async ({ page }) => {
    logger.info("Starting Invalid Login Test");

    await login.enterCredentials(
      data.Invalid_user.username,
      data.Invalid_user.password
    );

    await login.clickOnLogin();

    await expect(login.errorMsg).toBeVisible();

    logger.info("Ending Invalid Login Test Completed");
  });

  test("empty credentials", async ({ page }) => {
    logger.info("Starting empty credentials Test");

    await login.enterCredentials(
      data["empty credentials"].username,
      data["empty credentials"].password
    );

    await login.clickOnLogin();

    await expect(login.errorMsg).toBeVisible();

    logger.info("Ending empty credentials Test Completed");
  });

  // test("Valid Login", async ({ page }) => {
  //   logger.info("Starting Valid Login Test");

  //   await login.enterCredentials( data.Valid_user.username,data.Valid_user.password);

  //   await login.clickOnLogin();

  //   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  //   logger.info("Valid Login Test Completed");
  // });
});















// import { test, expect } from "@playwright/test";
// import { LoginPage } from "../Pages/LoginPage.spec";
// const testdata = require("../Test data/LoginTestData.json");

// test("Valid login", async ({ page }) => {
//   const login = new LoginPage(page);
//   //await login.getUrl(testdata.BaseUrl);
//   await login.login(testdata.UserName, testdata.Password);
//    await expect(login.afterLoginbtn).toBeVisible();
// });

// test("Without data", async ({ page }) => {
//   const login = new LoginPage(page);
//   await login.getUrl(testdata.BaseUrl);
//   await login.login("", "");
//   await expect(login.errorMsg).toBeVisible();
// });

// test("invalid data", async({page})=>{

//   const login = new LoginPage(page);
//   await login.getUrl(testdata.BaseUrl);
//   await login.login(testdata.invalidUser,testdata.invalidPassword);
//   await expect(login.errorMsg).toBeVisible();

// })
