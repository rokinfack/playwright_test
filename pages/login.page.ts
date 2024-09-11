import { expect, type Locator, type Page } from '@playwright/test';

export default class LoginPage {
    readonly page : Page;
    readonly usernameInput : Locator;
    readonly passwordInput : Locator;
    readonly submitButon : Locator;


    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator("#user-name");
        this.passwordInput = page.locator("#password");
        this.submitButon = page.locator('input[type="submit"]');
    }

    goto(link:string){
      return  this.page.goto(link)
        
    }

    saisirPassword(password: string){
        return this.passwordInput.fill(password)
    }

    saisirUsername(username: string){
        return this.usernameInput.fill(username)
    }

    clickSubmitButton(){
        return this.submitButon.click()
    }

    async doLogin(username: string, password: string){
        await this.saisirUsername(username)
        await this.saisirPassword(password)
        await this.clickSubmitButton()
    }
}