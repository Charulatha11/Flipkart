import { test } from '@playwright/test';

test('Dropdown test', async ({ page }) => {
    await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');

    await page.getByRole('button', { name: 'Styled Dropdown' }).click();

    await page.getByRole('combobox').selectOption('Styled Option 2');

    await page.getByRole('button', { name: 'Grouped Dropdown' }).click();

    await page.getByRole('combobox').selectOption('option4');

    await page.getByRole('button', { name: 'Multi-Select' }).click();

    await page.locator('//select[@multiple]').selectOption([
        { value: 'option1' },
        { value: 'option2' },
        { value: 'option3' }
    ]);
});
