import { expect } from '@playwright/test';
import { test } from '../fixtures/fixture';

test.describe('Menu Page tests', () => {
  test.beforeEach(async ({ fastPizzaMocks, homePage }) => {
    await fastPizzaMocks.getMenu('mocks/menu.json');
    await homePage.navigateTo();
    await homePage.usernameInputValue.fill('John Doe');
    await homePage.startOrderingButton.click();
  });

  test('should be able to add an item to the cart', async ({}) => {});

  test('should be able to delete an item from the cart', async ({}) => {});
});
