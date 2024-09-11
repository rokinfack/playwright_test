// tests/panier.spec.ts
import { test, expect } from '@playwright/test';
import { PanierPage } from '../pages/panier.page';

test.describe('Tests du Panier', () => {
  
  test('Ajout d\'un produit au panier', async ({ page }) => {

    const panierPage = new PanierPage(page);
    await page.goto('https://www.saucedemo.com/');

    await panierPage.doLogin("","");

    await panierPage.addProductToCart();

    await panierPage.openCart();

    const isProductInCart = await panierPage.isProductInCart('Sauce Labs Backpack');

    expect(isProductInCart).toBeTruthy();
  });
});
