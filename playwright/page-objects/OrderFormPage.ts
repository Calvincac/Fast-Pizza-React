import { Page, Locator } from '@playwright/test';

export class OrderFormPage {
  private page: Page;

  private selectors = {
    customerName: 'customer-name',
    customerPhone: 'customer-phone',
    customerAddress: 'customer-address',
    priorityCheckbox: 'priority-checkbox',
  };

  constructor(page: Page) {
    this.page = page;
  }

  get customerName() {
    return this.page.getByTestId(this.selectors.customerName);
  }

  get customerPhone() {
    return this.page.getByTestId(this.selectors.customerPhone);
  }

  get customerAddress() {
    return this.page.getByTestId(this.selectors.customerAddress);
  }

  get priorityCheckbox() {
    return this.page.getByTestId(this.selectors.priorityCheckbox);
  }
}
