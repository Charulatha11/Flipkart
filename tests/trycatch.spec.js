import { test } from '@playwright/test';

test('Try Catch test', async ({ page }) => {
   await page.goto('https://www.flipkart.com/');

    try {
        await page.locator('//span[text()="✕"]').click();
        await page.locator('//input[@type="number"]').fill('7358359683');
    //     await page.getByRole('button', { name: 'Continue' }).click();
    //     await page.locator('//span[text()="Edit"]').click();
    //     await page.locator('//input[@type="number"]').fill('9876543210');
    //     await page.getByRole('button', { name: 'Continue' }).click();
    }
    catch (error) {
        console.error('An error occurred during the login process:', error);
    }

})
