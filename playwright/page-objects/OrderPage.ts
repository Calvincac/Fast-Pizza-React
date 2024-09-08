import { Page, Locator } from '@playwright/test';

export class OrderPage {
  private page: Page;
  private orderId: Locator;
  private priorityLabel: Locator;
  private orderStatus: Locator;
  private orderEta: Locator;
  private itemQuantity: Locator;
  private itemTotalPrice: Locator;
  private orderIngredients: Locator;
  private pizzaPrice: Locator;
  private priorityPrice: Locator;
  private totalOrderPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.orderId = page.getByTestId('order-id');
    this.priorityLabel = page.getByTestId('priority-label');
    this.orderStatus = page.getByTestId('order-status');
    this.orderEta = page.getByTestId('order-eta');
    this.itemQuantity = page.getByTestId('item-quantity');
    this.itemTotalPrice = page.getByTestId('item-total-price');
    this.orderIngredients = page.getByTestId('order-ingredients');
    this.pizzaPrice = page.getByTestId('pizza-price');
    this.priorityPrice = page.getByTestId('priority-price');
    this.totalOrderPrice = page.getByTestId('total-order-price');
  }

  async getOrderIdText(): Promise<string | null> {
    return await this.orderId.textContent();
  }

  async getPriorityLabelText(): Promise<string | null> {
    return await this.priorityLabel.textContent();
  }

  async getOrderStatusText(): Promise<string | null> {
    return await this.orderStatus.textContent();
  }

  async getOrderEtaText(): Promise<string | null> {
    return await this.orderEta.textContent();
  }

  async getItemQuantityText(): Promise<string | null> {
    return await this.itemQuantity.textContent();
  }

  async getItemTotalPriceText(): Promise<string | null> {
    return await this.itemTotalPrice.textContent();
  }

  async getOrderIngredientsText(): Promise<string | null> {
    return await this.orderIngredients.textContent();
  }

  async getPizzaPriceText(): Promise<string | null> {
    return await this.pizzaPrice.textContent();
  }

  async getPriorityPriceText(): Promise<string | null> {
    return await this.priorityPrice.textContent();
  }

  async getTotalOrderPriceText(): Promise<string | null> {
    return await this.totalOrderPrice.textContent();
  }
}
