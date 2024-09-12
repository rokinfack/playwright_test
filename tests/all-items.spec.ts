import test, { expect } from "@playwright/test";
import { AllItemsPages } from '../pages/all-items.pages';
import LoginPage from "../pages/login.page";

test("All products items", { tag: "@regression" }, async ({ page }) => {
    const loginPage = new LoginPage(page)
    const allProduct = new AllItemsPages(page);
    // etape de login page
    await loginPage.goto("https://www.saucedemo.com/")
    await loginPage.saisirUsername("standard_user")
    await loginPage.saisirPassword("secret_sauce")
    await loginPage.clickSubmitButton()
    await expect(page.locator('span[data-test="title"]')).toContainText("Products")
    await allProduct.clickOnHumburger();
    await allProduct.clickOnAllProducts()
    await allProduct.closeHumburger()
    const productTitle = await allProduct.getPageProductTitle();
    expect(productTitle).toBe('Products');

    expect(allProduct.allProducts).toBeTruthy()

     // Click sur le menu
     await allProduct.clickOnHumburger(); 

     //  click sur lien pour afficher tous les produits
     await allProduct.clickOnAllProducts()
 
     //  Fermer le menu de la page produit
     await allProduct.closeHumburger()
     
     // Verifie que le titre de la page est présent
     expect(productTitle).toBe('Productse');
 
     //  Verifie que 
     expect(allProduct.allProducts).toBeTruthy()

})

