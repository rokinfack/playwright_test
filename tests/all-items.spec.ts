import test, { expect } from "@playwright/test";
import { AllItemsPages } from '../pages/all-items.pages';
import LoginPage from "../pages/login.page";

test("All products items",{tag: "@regression"}, async ({ page }) => {
    const loginPage = new LoginPage(page)
        await loginPage.goto("https://www.saucedemo.com/")
        await loginPage.saisirUsername("standard_user")
        await loginPage.saisirPassword("secret_sauce")
        await loginPage.clickSubmitButton()
        await expect(page.locator('span[data-test="title"]')).toContainText("Products")
    const allProduct = new AllItemsPages(page);
    
    await allProduct.clickOnHumburger();

    await allProduct.clickOnAllProducts()
    await allProduct.closeHumburger()

    const productTitle = await allProduct.getPageProductTitle();
    expect(productTitle).toBe('Products');
    
})

