import { test, expect } from '@playwright/test';

test('testUIBasic', async ({ page }) => {
    //chrome - plugin/cookies
    //browser.newContext();
    //const context = await browser.newContext();
    //const page =await context.newPage();   
    await page.goto('https://www.saucedemo.com/');


});

test('Google Page', async ({ page }) => {
    //chrome - plugin/cookies
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
    //await page.pause();
    await page.getByLabel


});

test.only('Test Incorrect Credentials', async ({ page }) => {
    const usernameTxtBox = page.locator('#username');
    const passwordTxtBox = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');


    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    //css selector, Xpath
    await usernameTxtBox.fill('ajayverma');
    await passwordTxtBox.fill('abcd@123');
    await signInBtn.click();
    // await expect(page.locator('a').filter({ hasText: 'ProtoCommerce' }).first()).toBeVisible();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(await page.locator("[style*='block']")).toContainText('Incorrect');

    await usernameTxtBox.fill('');
    // await page.waitForTimeout(3000)
    await usernameTxtBox.fill('rahulshettyacademy');
    await passwordTxtBox.fill('Learning@830$3mK2');
    // await page.waitForTimeout(3000)
    await signInBtn.click();
    // await page.waitForTimeout(5000)

    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    console.log(await cardTitles.last().textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);





});