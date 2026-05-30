// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Maximum time one tests can run for. */
  timeout: 40 * 1000,
  expect: {
    timeout: 5000
  },

  reporter: 'html',
  use: {

    trace: 'on-first-retry',
    browserName: 'chromium',
    screenshot: 'only-on-failure',
    headless: true
  }

});

