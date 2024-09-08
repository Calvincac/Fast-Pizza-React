const config = {
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  use: {
    baseURL: 'http://127.0.0.1:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  retries: 2,
  workers: 4,
  fullyParallel: true,
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
    {
      name: 'Mobile Chromium',
      use: {
        browserName: 'chromium',
        viewport: { width: 375, height: 667 }, // iPhone 6/7/8 viewport
        userAgent:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
      },
    },
    {
      name: 'Mobile Firefox',
      use: {
        browserName: 'firefox',
        viewport: { width: 375, height: 667 }, // iPhone 6/7/8 viewport
        userAgent:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X; rv:54.0) Gecko/54.0 Firefox/54.0',
      },
    },
    {
      name: 'Mobile WebKit',
      use: {
        browserName: 'webkit',
        viewport: { width: 375, height: 667 }, // iPhone 6/7/8 viewport
        userAgent:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
      },
    },
  ],
};

export default config;
