import { test, expect } from '@playwright/test';
test('Locators', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/'); // Navigating to the Sauce Demo website
    await page.locator('#user-name').fill('standard_user'); // Filling the username field with 'standard_user'

    //locate password fill password field
    await page.locator('#password').fill('secret_sauce'); // Filling the password field with 'secret_sauce'

    //locate login button and click
    await page.locator('#login-button').click(); // Clicking the login button to submit the login form

    //verify successful login by checking the presence of the products page
    await expect(page).toHaveURL(/inventory.html/); // Asserting that the URL has changed to the inventory page after login 
    await expect(page.locator('.title')).toHaveText('Products'); // Asserting that the page title is 'Products' to confirm successful login
    
    const productElements = page.locator('.title'); // Locating the product elements on the page using their class name
    await expect(productElements).toBeVisible();  // Asserting that the product elements are visible on the page

});


