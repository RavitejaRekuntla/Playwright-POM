export class AddToCartPage {
    constructor(page) {
        this.page = page;
        this.addtocart1 = '//button[@id="add-to-cart-sauce-labs-backpack"]';
        this.addtocart2 = '//button[@id="add-to-cart-sauce-labs-bolt-t-shirt"]';
        this.remove = '//button[@id="remove-sauce-labs-backpack"]';
    }

    async clickOnAddToCart1() {
        await this.page.locator(this.addtocart1).click();
    }

    async clickOnAddToCart2() {
        await this.page.locator(this.addtocart2).click();
    }
    async checkRemoveButton() {
        return this.page.locator(this.remove);
    }

   
}
