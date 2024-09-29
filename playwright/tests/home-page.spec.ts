import { expect } from 'playwright/test';
import { test } from '../fixtures/fixture';

test.describe('Home Page tests', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigateTo();
  });

  test('should be able to see the start ordering button when the name field is filled', async ({
    homePage,
  }) => {
    await test.step('Verify welcome message is displayed', async () => {
      await expect(homePage.welcomeMessage).toHaveText(
        '👋 Welcome! Please start by telling us your name:'
      );
    });

    await test.step('Verify start ordering button is hidden initially', async () => {
      await expect(homePage.startOrderingButton).toBeHidden();
    });

    await test.step('Fill in the username field', async () => {
      await homePage.usernameInputValue.fill('John Doe');
    });

    await test.step('Verify start ordering button becomes visible', async () => {
      await expect(homePage.startOrderingButton).toBeVisible();
    });
  });

  test('should be able to search for an existing order', async ({
    homePage,
    fastPizzaMocks,
    orderPage,
  }) => {
    await fastPizzaMocks.getReceivedOrder('mocks/received-order.json');
    await homePage.searchOrderField.fill('123');
    await homePage.searchOrderField.press('Enter');
    await expect(orderPage.orderId).toBeVisible();
  });

  test('should be able to see an error message when no order is found', async ({
    homePage,
  }) => {
    await test.step('Fill in the search order field', async () => {
      await homePage.searchOrderField.fill('123');
      await expect(homePage.searchOrderField).toHaveValue('123');
    });

    await test.step('Press Enter to search for the order', async () => {
      await homePage.searchOrderField.press('Enter');
    });

    await test.step('Verify the search order field is cleared', async () => {
      await expect(homePage.searchOrderField).toBeEmpty();
    });

    await test.step('Verify general error message is displayed', async () => {
      await expect(homePage.generalError).toHaveText('Something went wrong 😢');
    });

    await test.step('Verify specific error message is displayed', async () => {
      await expect(homePage.errorMessage).toBeVisible();
    });

    await test.step('Verify go back button is visible', async () => {
      await expect(homePage.goBackButton).toBeVisible();
    });
  });
});
