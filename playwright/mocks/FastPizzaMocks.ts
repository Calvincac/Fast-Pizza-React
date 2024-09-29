import { Page, Route } from 'playwright';

class FastPizzaMocks {
  constructor(private page: Page) {}

  async getMenu(path: string) {
    await this.page.route('**/api/menu', async (route: Route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        path,
      });
    });
  }

  async placeOrder(path: string) {
    await this.page.route('**/api/order', async (route: Route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        path,
      });
    });
  }

  async getReceivedOrder(path: string) {
    await this.page.route('**/api/order/*', async (route: Route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        path,
      });
    });
  }
}

export default FastPizzaMocks;
