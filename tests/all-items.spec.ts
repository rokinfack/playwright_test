import test, { expect } from "@playwright/test";
import { AllItemsPages } from '../pages/all-items-pages';

test("All products items", async ({ page }) => {
    const allProduct = new AllItemsPages(page);

    await allProduct.goto('https://www.saucedemo.com/')
    
    await allProduct.clickOnHumburger();

    await allProduct.clickOnAllProducts()
    await allProduct.closeHumburger()
    await expect(allProduct.getPageProductTitle).toBe('Products');
    
})

