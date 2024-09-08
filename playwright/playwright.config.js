export default {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 160 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 15 * 1000,
  },
  workers: 2,
  // Run tests in same spec in parallel
  fullyParallel: true,

  /* Give failing tests 3 retry attempts */
  retries: 2,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['blob', { outputDir: 'blob-report' }]], // See https://playwright.dev/docs/test-reporters#blob-reporter
  use: {
    // Maximum time each action such as `click()` can take. Defaults to 0 (no limit).
    actionTimeout: 20 * 1000,
    baseURL: 'http://localhost:5173',
    browserName: 'chromium',
    headless: true,
    testIdAttribute: 'data-auto-id',
    screenshot: 'on',
    video: 'on-first-retry',
    viewport: { width: 840, height: 800 },
    ignoreHTTPSErrors: false,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  testMatch: ['**/*.spec.ts'], // Updated pattern to include subdirectories
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
  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'test-results/',
};
