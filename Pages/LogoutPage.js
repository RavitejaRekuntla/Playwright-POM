exports.LogoutPage = class LogoutPage {
    constructor(page) {
        this.page = page;
        this.logoutSlide = '//button[@id="react-burger-menu-btn"]';
        this.logoutLink = '//a[@id="logout_sidebar_link"]';
        this.HomePageTitle = '//div[contains(text(),"Swag")]';

    }

    async ClickOnlogoutslide() {
        await this.page.locator(this.logoutSlide).click();
    }

    async ClickOnlogout() {
        await this.page.locator(this.logoutLink).click();
    }
    async checkHomePageTitle() {
        return this.page.locator(this.HomePageTitle);
    }
}