import { Locator, Page } from "@playwright/test";

export  class AllItemsPages{

    readonly page: Page;
    readonly clickOnHumburgerBtn: Locator;
    readonly clickOnAllProductsbtn: Locator;
    readonly closeHumburgerBtn: Locator;
    readonly getTitleEl: Locator;
    readonly firstProductEl: Locator;

    constructor(page: Page){
        this.page = page;
        this.clickOnHumburgerBtn = page.locator("[id='react-burger-menu-btn']")
        this.clickOnAllProductsbtn = page.locator("[data-test='inventory-sidebar-link']")
        this.closeHumburgerBtn = page.locator("[id='react-burger-cross-btn']")
        this.getTitleEl = page.locator("[data-test='data-test'")
        this.firstProductEl = page.locator("[data-test='inventory-item-name']")
    }

    async goto(link: string){
        return await this.page.goto(link);
    }

    async clickOnHumburger(){
         await this.clickOnHumburgerBtn.click();
    }
    async clickOnAllProducts(){
        return await this.clickOnAllProductsbtn.click();
    }
    async closeHumburger(){
        return await this.closeHumburgerBtn.click();
    }

    async getPageProductTitle(){
        return await this.getTitleEl;
    }
    async isFirstProductDisplay(){
        return await this.firstProductEl;
    }

    

}