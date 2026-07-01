// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Maximum time one tests can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },


  /* Retries only in CI */
  retries: process.env.CI ? 2 : 0,



  /* Reports */
  reporter: [
    ['html'],
    ['list'],
    ['junit', { outputFile: 'test-results/results.xml' }],
  ],

  use: {

    trace: 'on-first-retry',
    browserName: 'chromium',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true
  }

});

