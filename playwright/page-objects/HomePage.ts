import { Page, Locator } from '@playwright/test';

export class HomePage {
  private page: Page;

  private selectors = {
    searchOrderField: 'search-order',
    welcomeMessage: 'welcome-message',
    usernameField: 'username',
    startOrderingButton: 'start-order',
    generalError: 'general-error',
    errorMessage: 'error-message',
    errorSection: 'error-section',
  };

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo({ initialUrl = '/', path = '' }) {
    await this.page.goto(`${initialUrl}${path}`);
  }

  get welcomeMessage() {
    return this.page.getByTestId(this.selectors.welcomeMessage);
  }

  get usernameInputValue() {
    return this.page.getByTestId(this.selectors.usernameField);
  }

  get searchOrderField() {
    return this.page.getByTestId(this.selectors.searchOrderField);
  }

  get startOrderingButton() {
    return this.page.getByTestId(this.selectors.startOrderingButton);
  }

  get generalError() {
    return this.page.getByTestId(this.selectors.generalError);
  }

  get errorMessage() {
    return this.page.getByTestId(this.selectors.errorMessage);
  }

  get goBackButton() {
    return this.page.getByTestId(this.selectors.errorSection).locator('button');
  }
}
