import { Page, Locator } from '@playwright/test';

export class HomePage {
  private page: Page;
  private searchOrderField: Locator;
  private welcomeMessage: Locator;
  private usernameField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchOrderField = page.getByTestId('search-order');
    this.welcomeMessage = page.getByTestId('welcome-message');
    this.usernameField = page.getByTestId('username');
  }

  async navigateTo() {
    await this.page.goto('/');
  }

  async getWelcomeMessageText(): Promise<string | null> {
    return await this.welcomeMessage.textContent();
  }

  async getUsernameInputValue(): Promise<string> {
    return await this.usernameField.inputValue();
  }

  async getSearchOrderInputValue(): Promise<string> {
    return await this.searchOrderField.inputValue();
  }
}
