import { test, expect } from '@playwright/test';
//import { login } from '../Utils/Global-setup.js';
import { AddToCartPage } from '../Pages/addtocartPage.js';
import logger from '../Utils/Logger.spec.js';

test('Add items to cart', async ({ page }) => {
    logger.info('Starting Add items to cart')
   // await login(page);   
   await page.goto("https://www.saucedemo.com/inventory.html");
    const addToCart = new AddToCartPage(page);
    await addToCart.clickOnAddToCart1();
    await addToCart.clickOnAddToCart2();

   await expect(await addToCart.checkRemoveButton()).toBeVisible();
    logger.info('Ending Add items to cart')
});
