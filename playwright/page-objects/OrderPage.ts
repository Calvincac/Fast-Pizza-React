import { Page, Locator } from '@playwright/test';

export class OrderPage {
  private page: Page;

  private selectors = {
    orderId: 'order-id',
    priorityLabel: 'priority-label',
    orderStatus: 'order-status',
    orderEta: 'order-eta',
    itemQuantity: 'item-quantity',
    itemTotalPrice: 'item-total-price',
    orderIngredients: 'order-ingredients',
    pizzaPrice: 'pizza-price',
    priorityPrice: 'priority-price',
    totalOrderPrice: 'total-order-price',
  };

  constructor(page: Page) {
    this.page = page;
  }

  get orderId() {
    return this.page.getByTestId(this.selectors.orderId);
  }

  get priorityLabel() {
    return this.page.getByTestId(this.selectors.priorityLabel);
  }

  get orderStatus() {
    return this.page.getByTestId(this.selectors.orderStatus);
  }

  get orderEta() {
    return this.page.getByTestId(this.selectors.orderEta);
  }

  get itemQuantity() {
    return this.page.getByTestId(this.selectors.itemQuantity);
  }

  get itemTotalPrice() {
    return this.page.getByTestId(this.selectors.itemTotalPrice);
  }

  get orderIngredients() {
    return this.page.getByTestId(this.selectors.orderIngredients);
  }

  get pizzaPrice() {
    return this.page.getByTestId(this.selectors.pizzaPrice);
  }

  get priorityPrice() {
    return this.page.getByTestId(this.selectors.priorityPrice);
  }

  get totalOrderPrice() {
    return this.page.getByTestId(this.selectors.totalOrderPrice);
  }
}
