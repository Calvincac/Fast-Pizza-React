import { Page, Locator } from '@playwright/test';

export class CartPage {
  private page: Page;

  private selectors = {
    loggedInUsername: 'logged-in-username',
    cartMessage: 'cart-message',
    totalPrice: 'total-price',
    currentQuantity: 'current-quantity',
    cartQuantity: 'cart-quantity',
    totalCartPrice: 'total-cart-price',
    openCartButton: 'open-cart-button',
  };

  constructor(page: Page) {
    this.page = page;
  }

  get loggedInUsername() {
    return this.page.getByTestId(this.selectors.loggedInUsername);
  }

  get cartMessage() {
    return this.page.getByTestId(this.selectors.cartMessage);
  }

  get totalPrice() {
    return this.page.getByTestId(this.selectors.totalPrice);
  }

  get currentQuantity() {
    return this.page.getByTestId(this.selectors.currentQuantity);
  }

  get cartQuantity() {
    return this.page.getByTestId(this.selectors.cartQuantity);
  }

  get totalCartPrice() {
    return this.page.getByTestId(this.selectors.totalCartPrice);
  }

  get openCartButton() {
    return this.page.getByTestId(this.selectors.openCartButton);
  }
}
