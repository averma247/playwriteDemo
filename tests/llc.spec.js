import { test, expect } from '@playwright/test';

test('Playwright Special Locators', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    console.log(await page.title());
    await page.getByLabel('Check me out if you Love IceCreams!').click();
    await page.getByLabel('Employed').check();
    await page.getByLabel('Gender').selectOption('Female');
    await page.getByPlaceholder('Password').fill('abc1234');
    await page.getByRole('button', { name: 'Submit' }).click();
    const msg = await page.getByText('Success! The Form has been submitted successfully!.').textContent();
    console.log(msg);
    await page.getByRole('link', { name: 'Shop' }).click();
    await page.waitForLoadState('networkidle');
    await page.locator("app-card").filter({ hasText: 'Nokia Edge' }).getByRole("button").click();





});