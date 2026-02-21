import { LoginPage } from '../Pages/LoginPage.js';
import { test, expect } from "@playwright/test";
import logger from '../Utils/Logger.spec.js';
const { chromium } = require("@playwright/test");
const fs = require("fs");
const testdata = require("../Testdata/LoginTestData.json");


async function globalSetup(config) {
logger.info("Starting Global Login Setup");
  const browsers = await chromium.launch({ headless: false, slowMo: 100 });
  const page = await browsers.newPage();
  const loginPage = new LoginPage(page);

  await page.goto(testdata.Url.data);

  await loginPage.enterCredentials(testdata.Valid_user.username, testdata.Valid_user.password);
  await loginPage.clickOnLogin();
  // const expectedTitle = "Swag Labs";
  // const actualTitle = await page.title();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await page.context().storageState({ path: 'storageState.json' });
  

}

module.exports = globalSetup;














// import { chromium } from '@playwright/test';
// import { LoginPage } from '../Pages/LoginPage.js'; 
// import logger from '../Utils/Logger.spec.js';
// import data from './../Testdata/LoginTestData.json';

// export default async function globalSetup() {
//   logger.info("Starting Global Login Setup");

//   const browser = await chromium.launch();
//   const page = await browser.newPage();

//   // Perform login
//   const loginPage = new LoginPage(page);
//   await loginPage.goto(data.Url.data);
//   await loginPage.enterCredentials(
//     data.Valid_user.username,
//     data.Valid_user.password
//   );
//   await loginPage.clickOnLogin();

//   // Save authenticated session to reuse in all tests
//   await page.context().storageState({ path: 'state.json' });

//   logger.info("Login successful. Session state saved.");

//   await browser.close();
//   logger.info("Browser closed. Global setup complete.");
// }















// import { LoginPage } from '../Pages/LoginPage.js';
// import logger from '../Utils/Logger.spec.js';
// import data from '../TestData/LoginTestData.json';  
 

// export async function login(page) {
//     logger.info("Starting Global Test");
//     const loginPage = new LoginPage(page);
//     await loginPage.goto(data.Url.data);
//     await loginPage.enterCredentials(
//         data.Valid_user.username,
//         data.Valid_user.password
//     );
//     await loginPage.clickOnLogin();
//    // await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
//     logger.info("Ending Global Test");
// }









