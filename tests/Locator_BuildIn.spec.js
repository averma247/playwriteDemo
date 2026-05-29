import { test, expect } from '@playwright/test';
test('Built-in L    ocators', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/'); // Navigating to the Sauce Demo website

    await page.getByPlaceholder('Username').fill('standard_user'); // Filling the username field
    await page.getByPlaceholder('Password').fill('secret_sauce'); // Filling the password field
    await page.getByRole('button', { name: 'Login' }).click(); // Clicking the login button

    //Assertion to verify that the user has successfully logged in by checking the presence of the products page
    await expect(page).toHaveURL(/inventory.html/); // Asserting that the URL has changed to the inventory page after login 

    await expect(page.getByText('Products')).toBeVisible(); // Asserting that the 'Products' text is visible on the page to confirm successful login and navigation to the products page    

    await expect(page.getByRole('button', { name: 'Add to cart' }).first()).toBeVisible(); // Asserting that the first 'Add to cart' button is visible on the page to confirm that the products are displayed correctly after login

    await page.getByAltText('Sauce Labs Backpack').click(); // Clicking on the product image with alt text 'Sauce Labs Backpack' to navigate to the product details page

    await page.getByRole('button', { name: 'Add to cart' }).first().click(); // Clicking the 'Add to cart' button on the product details page to add the product to the shopping cart







});
