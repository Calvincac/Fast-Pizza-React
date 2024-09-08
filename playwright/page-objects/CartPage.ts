import { Page, Locator } from '@playwright/test';

export class CartPage {
  private page: Page;
  private loggedInUsername: Locator;
  private cartMessage: Locator;
  private totalPrice: Locator;
  private currentQuantity: Locator;
  private cartQuantity: Locator;
  private totalCartPrice: Locator;
  private openCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loggedInUsername = page.getByTestId('logged-in-username');
    this.cartMessage = page.getByTestId('cart-message');
    this.totalPrice = page.getByTestId('total-price');
    this.currentQuantity = page.getByTestId('current-quantity');
    this.cartQuantity = page.getByTestId('cart-quantity');
    this.totalCartPrice = page.getByTestId('total-cart-price');
    this.openCartButton = page.getByTestId('open-cart-button');
  }

  async getLoggedInUsernameText(): Promise<string | null> {
    return await this.loggedInUsername.textContent();
  }

  async getCartMessageText(): Promise<string | null> {
    return await this.cartMessage.textContent();
  }

  async getTotalPriceText(): Promise<string | null> {
    return await this.totalPrice.textContent();
  }

  async getCurrentQuantityText(): Promise<string | null> {
    return await this.currentQuantity.textContent();
  }

  async getCartQuantityText(): Promise<string | null> {
    return await this.cartQuantity.textContent();
  }

  async getTotalCartPriceText(): Promise<string | null> {
    return await this.totalCartPrice.textContent();
  }

  async clickOpenCartButton(): Promise<void> {
    await this.openCartButton.click();
  }
}
