import { test, expect } from '@playwright/test';

test('testUIBasic', async ({ page }) => {
    //chrome - plugin/cookies
    //browser.newContext();
    //const context = await browser.newContext();
    //const page =await context.newPage();   
    await page.goto('https://www.saucedemo.com/');


});

test('Client App Test', async ({ page }) => {

    const usernameTxtBox = page.locator('#userEmail');
    const passwordTxtBox = page.locator('#userPassword');
    const signInBtn = page.locator('#login');

    await page.goto('https://rahulshettyacademy.com/client');
    console.log(await page.title());

    await usernameTxtBox.fill('anshika@gmail.com');
    await passwordTxtBox.fill('Iamking@000');

    console.log(await usernameTxtBox.inputValue());
    console.log(await passwordTxtBox.inputValue());

    await signInBtn.click();
    await page.waitForLoadState('networkidle');// Wait for the page to load after clicking the sign-in button

    const cardTitles = await page.locator('.card-body b').allTextContents();
    console.log(cardTitles);
    



});

