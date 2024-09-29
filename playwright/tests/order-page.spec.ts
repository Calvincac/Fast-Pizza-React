import { expect } from '@playwright/test';
import { test } from '../fixtures/fixture';

test.describe('Order Page tests', () => {
  test.beforeEach(async ({ fastPizzaMocks, homePage }) => {
    await fastPizzaMocks.getMenu('mocks/menu.json');
    await fastPizzaMocks.getReceivedOrder('mocks/received-order.json');
    await homePage.navigateTo({ path: '/order/123' });
  });

  test('should be able to see the order and its data', async ({
    orderPage,
  }) => {
    // there are more items in the order
    // await expect(orderPage.itemQuantity).toBeVisible();
    // await expect(orderPage.itemTotalPrice).toBeVisible();
    await expect(orderPage.orderEta).toBeVisible();
    await expect(orderPage.orderId).toBeVisible();
    await expect(orderPage.totalOrderPrice).toBeVisible();
    await expect(orderPage.priorityLabel).toBeVisible();
    await expect(orderPage.priorityPrice).toBeVisible();
    await expect(orderPage.pizzaPrice).toBeVisible();
  });
});
