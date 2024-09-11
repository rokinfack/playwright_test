import { Locator, Page } from "@playwright/test";

export  class AllItemsPages{

    readonly page: Page;
    readonly clickOnHumburgerBtn: Locator;
    readonly clickOnAllProductsbtn: Locator;
    readonly closeHumburgerBtn: Locator;
    readonly getTitleEl: Locator;
    readonly productsEl: Locator;

    constructor(page: Page){
        this.page = page;
        this.clickOnHumburgerBtn = page.locator("[id='react-burger-menu-btn']")
        this.clickOnAllProductsbtn = page.locator("[data-test='inventory-sidebar-link']")
        this.closeHumburgerBtn = page.locator("[id='react-burger-cross-btn']")
        this.getTitleEl = page.locator("//span[@data-test='title']")
        this.productsEl = page.locator("[data-test='inventory-item']")
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
        return await this.getTitleEl.textContent();
    }
    
    async allProducts() {
        const products = await this.productsEl.count();
        if (products > 0) {
            return true;
        }
        return false;
      }
    

}