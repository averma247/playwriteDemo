const { test, expect } = require('@playwright/test');

test('Calendar Test', async ({ page }) => {
    const monthNumber = "6";
    const yearNumber = "2027";
    const dateNumber = "7";
    const expectedDateList = [monthNumber, dateNumber, yearNumber];

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    console.log(await page.title());

    await page.locator('.react-date-picker__inputGroup').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.getByText(yearNumber).click();
    await page.locator('.react-calendar__year-view__months__month').nth(Number(monthNumber) - 1).click();
    await page.locator(`//abbr[text()='${dateNumber}']`).click();

    //await page.waitForTimeout(2000); // Only for debugging
    const inputs = await page.locator('.react-date-picker__inputGroup__input');

    for (let i = 0; i < expectedDateList.length; i++) {

        const inputValue = await inputs.nth(i).inputValue();
        console.log(inputValue);
        await expect(inputs.nth(i)).toHaveValue(expectedDateList[i]);
    }




});