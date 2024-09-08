import { Page, Locator } from '@playwright/test';

export class MenuPage {
  private page: Page;
  private loggedInUsername: Locator;
  private pizzaNames: Locator;
  private pizzaIngredients: Locator;
  private pizzaPrices: Locator;
  private soldOutPizzaPrices: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loggedInUsername = page.getByTestId('logged-in-username');
    this.pizzaNames = page.getByTestId('pizza-name');
    this.pizzaIngredients = page.getByTestId('pizza-ingradients');
    this.pizzaPrices = page.getByTestId('pizza-price');
    this.soldOutPizzaPrices = page.getByTestId('sold-out-pizza-price');
  }

  async getLoggedInUsernameText(): Promise<string | null> {
    return await this.loggedInUsername.textContent();
  }

  async getPizzaNames(): Promise<string[]> {
    return await this.pizzaNames.allTextContents();
  }

  async getPizzaIngredients(): Promise<string[]> {
    return await this.pizzaIngredients.allTextContents();
  }

  async getPizzaPrices(): Promise<string[]> {
    return await this.pizzaPrices.allTextContents();
  }

  async getSoldOutPizzaPrices(): Promise<string[]> {
    return await this.soldOutPizzaPrices.allTextContents();
  }
}
