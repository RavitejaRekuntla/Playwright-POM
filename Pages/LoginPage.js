
exports.LoginPage=class LoginPage{
    constructor(page){
        this.page=page;
        this.userName = '//input[@id="user-name"]';
        this.password = '//input[@id="password"]';
        this.loginButton = '//input[@id="login-button"]';
        this.errorMsg = page.locator('[data-test="error"]');
      
    }    

    async goto(urlData){
        await this.page.goto(urlData);
     }

    async enterCredentials(userName, password){
        await this.page.locator(this.userName).fill(userName);
        await this.page.locator(this.password).fill(password);
    }

    async clickOnLogin(){
        await this.page.locator(this.loginButton).click();
    }

 async checkErrorMessage(){
        await this.page.locator(this.errorMsg);
    }
}















// const testdata = JSON.parse(
//   JSON.stringify(require("../Test data/LoginTestData.json"))
// );
// const logger = require("../Utils/Logger.spec");

// exports.LoginPage = class Login {
//   constructor(page) {
//     this.page = page;
//     this.userName_textox = page.locator('[data-test="username"]');
//     this.password_textbox = page.locator('[data-test="password"]');
//     this.login_button = page.getByRole("button", { name: "LOGIN" });
//     this.afterLoginbtn = page.locator("//div[@class='product_label']");
//     this.errorMsg = page.locator('[data-test="error"]');
//   }
//   async getUrl(url) {
//     logger.info("Starting getUrl method");
//     await this.page.goto(url);
//     logger.info("Ending getUrl method");
//   }
//   async login(userName, password) {
//     logger.info("Starting login method");
//     await this.userName_textox.fill(userName);
//     await this.password_textbox.fill(password);
//     await this.login_button.click();
//     logger.info("Ending login method");
//   }
// };
