import { test, expect } from '@playwright/test';

test('testUIBasic', async ({ page }) => {
    //chrome - plugin/cookies
    //browser.newContext();
    //const context = await browser.newContext();
    //const page =await context.newPage();   
    await page.goto('https://www.saucedemo.com/');


});

test('Test Google Search', async ({ page }) => {
    await page.goto('https://www.google.com/');
    const searchTxtBox = page.locator('#APjFqb');
    await searchTxtBox.fill('Playwright');
    await searchTxtBox.press('Enter');
    console.log(await page.title());
    await expect(page).toHaveTitle(/Playwright/);

});


test('Test Incorrect Credentials', async ({ page }) => {
    const usernameTxtBox = page.locator('#username');
    const passwordTxtBox = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');


    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    //css selector, Xpath
    await usernameTxtBox.fill('ajayverma');
    await passwordTxtBox.fill('abcd@123');

    console.log(await usernameTxtBox.inputValue());
    console.log(await passwordTxtBox.inputValue());

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

test('UI Controls on Page', async ({ page }) => {
    const usernameTxtBox = page.locator('#username');
    const passwordTxtBox = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');
    const dropdown = page.locator('select.form-control');

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    await dropdown.selectOption('consult');

    await page.locator('.radiotextsty').nth(1).click();
    await page.locator('#okayBtn').click();
    console.log(await page.locator('.radiotextsty').last().isChecked());
    await expect(page.locator('.radiotextsty').last()).toBeChecked();
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    //await expect(await page.locator('#terms').isChecked()).toBeFalsy();
    await expect(page.locator('#terms')).not.toBeChecked();
    //await page.waitForTimeout(3000);
    await expect(page.locator('[href*=documents-request]')).toHaveAttribute('class', 'blinkingText');


});

test.only('Child Window handling', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    const usernameTxtBox = page.locator('#username');

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentLink = page.locator('[href*=documents-request]');
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        documentLink.click()
    ]);
    await newPage.waitForLoadState();
    const childWindowText = await newPage.locator('.red').textContent();
    console.log(childWindowText);
    const arrchildWindowText = childWindowText.split('@');
    const domain = arrchildWindowText[1].split(' ')[0];
    console.log(domain);

    await usernameTxtBox.fill(domain);
    // await page.pause();

    console.log('Username Entered:', await usernameTxtBox.inputValue());




});