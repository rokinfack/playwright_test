import { expect, type Locator, type Page } from '@playwright/test';
import { link } from 'fs';

export class DetailProduct {
    readonly page : Page;
    readonly detailproductButon : Locator;


    constructor(page: Page) {
        this.page = page;
        this.detailproductButon = page.locator ("#item_4_title_link");
    }

    async goto(link:string){
        await this.page.goto(link)
        
    }



     clickdetailproductButonButton(){
        return this.detailproductButon.click()
    }
}