import { test, expect } from '@playwright/test';
test('Multiple Locators', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/'); // Navigating to the Sauce Demo website
    await page.waitForLoadState('networkidle'); // Waiting for the page to fully load before proceeding with the test steps

    await page.locator('#user-name').fill('standard_user'); // Filling the username field with 'standard_user'
    await page.locator('#password').fill('secret_sauce'); // Filling the password field with 'secret_sauce'
    await page.locator('#login-button').click(); // Clicking the login button to submit the login form

    //verify successful login by checking the presence of the products page
    await expect(page).toHaveURL(/inventory.html/); // Asserting that the URL has changed to the inventory page after login 
    
    /**
     * Locating multiple elements and iterating through them using the $$ method to retrieve a list of product name elements 
     * and logging their text content to the console.
     * The $$ method is used to locate multiple elements on the page that match the specified selector, in this case, 
     * elements with the class name 'inventory_item_name'.
     * The retrieved elements are then iterated over using a for loop, and the text content of each product name element is logged to the console.
     * This allows us to verify that the product names are correctly displayed on the page after a successful login.
     * Note: The $$ method returns an array of elements, so we need to await the result to get the actual list of elements before iterating through them.
     * 
     */
    //Find list of products and verify they are visible
    const productNames = page.$$('.inventory_item_name'); // Locating all product name elements on the page using their class name
    const count = (await productNames).length; // Getting the count of product name elements found
    console.log('Number of products found:', count); // Logging the number of products found to the console

    for (const productName of await productNames) { // Iterating through each product name element
        const name = await productName.textContent(); // Retrieving the text content of the product name element
        console.log('Product Name:', name); // Logging the product name to the console
    }   


    /**
     * Locating multiple elements and iterating through them using the locator method to retrieve a list of product name elements 
     * and logging their text content to the console.
     * The locator method is used to locate multiple elements on the page that match the specified selector, in this case, 
     * elements with the class name 'inventory_item_name'.
     * The retrieved elements are then iterated over using a for loop, and the text content of each product name element is logged to the console.
     * This allows us to verify that the product names are correctly displayed on the page after a successful login.
     * Note: The locator method returns a Locator object that can be used to interact with the located elements, so we can directly iterate through them without needing to await an array of elements.
     */
    const productNameLocators = page.locator('.inventory_item_name'); // Locating all product name elements on the page using their class name
    const locatorCount = await productNameLocators.count(); // Getting the count of product name elements found using the locator method
    console.log('Number of products found using locator:', locatorCount); // Logging the number of products found to the console

    for (let i = 0; i < locatorCount; i++) { // Iterating through each product name element using a for loop
        const name = await productNameLocators.nth(i).textContent(); // Retrieving the text content of the current product name element
        console.log('Product Name from locator:', name); // Logging the product name to the console
    } 

    const items = page.locator('.inventory_item_name'); 

    // Iterate through each item and verify it is visible
    for (let i = 0; i < await items.count(); i++) {
    await expect(items.nth(i)).toBeVisible();
    }

    // Verify the first item is visible
    await expect(page.locator('.inventory_item_name').first()).toBeVisible();

    await expect(page.locator("//div[contains(@class,'inventory_item_name')]").nth(1)).toBeVisible(); 

    const secondItem = await page.locator("//div[contains(@class,'inventory_item_name')]").nth(1).textContent(); // Locating the second product name element on the page using an XPath selector
    console.log('Second Product Name:', secondItem); // Logging the second product name to the console
    
    // Verify the last item is visible
    await expect(page.locator('.inventory_item_name').last()).toBeVisible(); 
    
    const lastItem = page.locator('.inventory_item_name').last(); // Locating the last product name element on the page using its class name
    await expect(lastItem).toBeVisible(); // Asserting that the last product name element is visible on the page    

    const lastItemText = await lastItem.textContent(); // Retrieving the text content of the last product name element
    console.log('Last Product Name:', lastItemText); // Logging the last product name to the console

    expect(lastItemText).toBe('Test.allTheThings() T-Shirt (Red)'); // Asserting that the last product name is 'Test.allTheThings() T-Shirt (Red)' to verify the correct product is displayed as the last item on the page  
    expect(await page.locator('.inventory_item_name').first()).toHaveText('Sauce Labs Backpack'); // Asserting that the first product name is 'Sauce Labs Backpack' to verify the correct product is displayed as the first item on the page
    console.log('First Product Name:', await page.locator('.inventory_item_name').first().textContent()); // Logging the first product name to the console

    



});


