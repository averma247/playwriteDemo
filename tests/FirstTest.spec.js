import {test,expect} from 'playwright/test';// Importing the test and expect functions from the Playwright testing library   

test('Open google and check title',async({page})=>{ // Defining a test case with a descriptive name
    await page.goto('https://www.google.com/');// Navigating to Google's homepage
    const pageTitle = await page.title(); // Retrieving the title of the current page
    console.log('Page Title:', pageTitle); // Logging the page title to the console

    const pageURL = page.url(); // Retrieving the current URL of the page
    console.log('Page URL:', pageURL); // Logging the page URL to the console
    await expect(page).toHaveTitle("Google"); // Asserting that the page title is 'Google'
});





