import test, { expect } from "@playwright/test";
import LoginPage from "../pages/login.page";

test.describe("login",()=>{
    // test.beforeEach(async({page})=>{
    //     await page.goto("https://www.saucedemo.com/")
    // })
    // test.afterEach(()=>{
    //     console.info("### FIN DU SCENARIO ###")
    // })
    
    test("login with username correct and password correct", {tag: "@regression"} , async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.goto("https://www.saucedemo.com/")
        await loginPage.saisirUsername("standard_user")
        await loginPage.saisirPassword("secret_sauce")
        await loginPage.clickSubmitButton()
        await expect(page.locator('span[data-test="title"]')).toContainText("Products")
    })
    test("login with username Incorrect and password correct", {tag: "@smoke"}, async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.goto("https://www.saucedemo.com/")
        await loginPage.saisirUsername("standard_user_incorrect")
        await loginPage.saisirPassword("secret_sauce")
        await loginPage.clickSubmitButton()
        await expect(page.locator('h3[data-test="error"]')).toBeVisible()
    })
    test("login with username correct and password Incorrect", {tag: "@smoke"}, async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.goto("https://www.saucedemo.com/")
        await loginPage.saisirUsername("standard_user")
        await loginPage.saisirPassword("secret_sauce_incorrect")
        await loginPage.clickSubmitButton()
        await expect(page.locator('h3[data-test="error"]')).toBeVisible()
    })

} )
