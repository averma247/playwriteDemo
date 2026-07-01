import { test, expect } from '@playwright/test';

test('testUIBasic', async ({ page }) => {
    //chrome - plugin/cookies
    //browser.newContext();
    //const context = await browser.newContext();
    //const page =await context.newPage();   
    await page.goto('https://www.saucedemo.com/');


});

test('Client App Test', async ({ page }) => {

    const email = "anshika@gmail.com";
    const password = "Iamking@000";
    const usernameTxtBox = page.locator('#userEmail');
    const passwordTxtBox = page.locator('#userPassword');
    const signInBtn = page.locator('#login');
    let desiredProduct = 'ZARA COAT 3';

    const products = page.locator('.card-body');


    await page.goto('https://rahulshettyacademy.com/client');
    console.log(await page.title());

    await usernameTxtBox.fill(email);
    await passwordTxtBox.fill(password);

    console.log(await usernameTxtBox.inputValue());
    console.log(await passwordTxtBox.inputValue());

    await signInBtn.click();
    //await page.waitForLoadState('networkidle');// Wait for the page to load after clicking the sign-in button
    await page.locator('.card-body b').first().waitFor(); // Wait for the first card title to be visible
    const cardTitles = await page.locator('.card-body b').allTextContents();
    console.log(cardTitles);

    const productCount = await products.count();
    console.log('Product Count: ' + productCount);

    for (let i = 0; i < productCount; i++) {
        const productName = await products.nth(i).locator('b').textContent();
        if (productName === desiredProduct) {
            await products.nth(i).locator('text= Add To Cart').click();
            break;
        }
    }

    await page.locator("[routerlink*='cart']").click();
    //await page.locator('h3:has-text("ZARA COAT 3")').isVisible();
    await expect(page.locator('h3:has-text("' + desiredProduct + '")')).toBeVisible();
    await page.locator('text=Checkout').click();
    await page.locator("[placeholder='Select Country']").pressSequentially('ind', { delay: 100 });
    await page.locator('span').filter({ hasText: 'India' }).last().click();
    await expect(page.locator('label[type="text"]')).toHaveText(email);
    await page.locator('a:has-text("PLACE ORDER")').click();
    await page.locator('.hero-primary').waitFor();
    await expect(await page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
    const orderId = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
    console.log(orderId);

    await page.locator('button[routerlink*="myorders"]').click();
    await page.locator('tbody').waitFor();
    const orderRows = await page.locator('tbody tr');
    const orderCount = await orderRows.count();
    for (let i = 0; i < orderCount; i++) {
        const rowOrderId = await orderRows.nth(i).locator('th').textContent();
        if (orderId.includes(rowOrderId)) {
            await orderRows.nth(i).locator('button').first().click();
            break;
        }
    }

    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderId.includes(orderIdDetails)).toBeTruthy();




});

