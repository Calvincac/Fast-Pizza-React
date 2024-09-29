import { Page, Locator } from '@playwright/test';

export class MenuPage {
  private page: Page;

  private selectors = {
    loggedInUsername: 'logged-in-username',
    pizzaNames: 'pizza-name',
    pizzaIngredients: 'pizza-ingradients',
    pizzaPrices: 'pizza-price',
    soldOutPizzaPrices: 'sold-out-pizza-price',
  };

  constructor(page: Page) {
    this.page = page;
  }

  get loggedInUsername() {
    return this.page.getByTestId(this.selectors.loggedInUsername);
  }

  get pizzaNames() {
    return this.page.getByTestId(this.selectors.pizzaNames);
  }

  get pizzaIngredients() {
    return this.page.getByTestId(this.selectors.pizzaIngredients);
  }

  get pizzaPrices() {
    return this.page.getByTestId(this.selectors.pizzaPrices);
  }

  get soldOutPizzaPrices() {
    return this.page.getByTestId(this.selectors.soldOutPizzaPrices);
  }
}
