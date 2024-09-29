import { test as baseTest } from '@playwright/test';

import { Fixtures } from '../custom-types/common-types';
import { HomePage } from '../page-objects/HomePage';
import { CartPage } from '../page-objects/CartPage';
import { MenuPage } from '../page-objects/MenuPage';
import { OrderPage } from '../page-objects/OrderPage';
import { OrderFormPage } from '../page-objects/OrderFormPage';
import FastPizzaMocks from '../mocks/FastPizzaMocks';

export const test = baseTest.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
  menuPage: async ({ page }, use) => {
    const menuPage = new MenuPage(page);
    await use(menuPage);
  },
  orderPage: async ({ page }, use) => {
    const orderPage = new OrderPage(page);
    await use(orderPage);
  },
  orderFormPage: async ({ page }, use) => {
    const orderFormPage = new OrderFormPage(page);
    await use(orderFormPage);
  },
  fastPizzaMocks: async ({ page }, use) => {
    const fastPizzaMocks = new FastPizzaMocks(page);
    await use(fastPizzaMocks);
  },
});
