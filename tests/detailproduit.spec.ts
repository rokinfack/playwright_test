import { test, expect } from "@playwright/test"
import LoginPage from "../pages/login.page";
import { DetailProduct } from "../pages/DetailProduct.page"



    test("detail produit", async ({ page }) => {
        const loginPage = new LoginPage(page)
        const detailProduct = new DetailProduct(page)
        
        await loginPage.goto("https://www.saucedemo.com/")


        // await loginPage.saisirUsername("standard_user")
        // await loginPage.saisirPassword("secret_sauce")
        // await loginPage.clickSubmitButton()

        //la fonction dologin connecte le user et remplace les 2etapes de saisiirUsername et password
        await loginPage.doLogin("standard_user", "secret_sauce")

        await detailProduct.clickdetailproductButonButton();
        await expect(page.locator('button[data-test="back-to-productsd"]')).toBeVisible();
    })


