import { type Locator, type Page } from "@playwright/test";
import { LoginPage } from "./loginPage";

export class PanierPage {
  
  readonly page: Page;
  readonly cartIcon: Locator;
  readonly listItems: Locator;
  readonly addToCartButton: Locator;
  readonly loginPage: LoginPage;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator("#shopping_cart_container a");
    this.listItems = page.locator("#cart_contents_container div");
    this.addToCartButton = page.locator("#add-to-cart-sauce-labs-backpack");
    this.loginPage = new LoginPage(page);
  }

  async goto(link: string) {
    await this.page.goto(link);
  }

  async doLogin(username: string, password: string) {
    await this.loginPage.saisirUsername(username);
    await this.loginPage.saisirPassword(password);
    await this.loginPage.clickSubmitButton();
  }

  async isProductInCart(productName: string): Promise<boolean> {
    const itemsText = await this.listItems.allInnerTexts();
    return itemsText.some((item) => item.includes(productName));
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }
}
