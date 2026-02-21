import { test, expect } from '@playwright/test';
//import { login } from '../Utils/Global-setup.js';
import { LogoutPage } from '../Pages/LogoutPage.js';
import logger from '../Utils/Logger.spec.js';

test('Logout', async ({ page }) => {
   logger.info('Starting Logout Test')
    //await login(page); 
    await page.goto("https://www.saucedemo.com/inventory.html");
    const logout = new LogoutPage(page);
    await logout.ClickOnlogoutslide();
    await logout.ClickOnlogout();
    await expect(await logout.checkHomePageTitle()).toBeVisible();
    logger.info('Ending of Logout Test')
});