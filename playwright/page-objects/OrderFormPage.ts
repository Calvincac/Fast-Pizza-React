import { Page, Locator } from '@playwright/test';

export class OrderFormPage {
  private page: Page;
  private customerName: Locator;
  private customerPhone: Locator;
  private customerAddress: Locator;
  private priorityCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.customerName = page.getByTestId('customer-name');
    this.customerPhone = page.getByTestId('customer-phone');
    this.customerAddress = page.getByTestId('customer-address');
    this.priorityCheckbox = page.getByTestId('priority-checkbox');
  }

  async getCustomerNameValue(): Promise<string> {
    return await this.customerName.inputValue();
  }

  async getCustomerPhoneValue(): Promise<string> {
    return await this.customerPhone.inputValue();
  }

  async getCustomerAddressValue(): Promise<string> {
    return await this.customerAddress.inputValue();
  }

  async isPriorityChecked(): Promise<boolean> {
    return await this.priorityCheckbox.isChecked();
  }
}
