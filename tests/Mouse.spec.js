import {test} from '@playwright/test';
test('Mouse Actions', async ({ page }) => {
        await page.goto('https://demoqa.com/buttons');
        await page.locator('#doubleClickBtn').dblclick();
        await page.locator('#rightClickBtn').click({button:'right'});
        await page.locator('//button[text()="Click Me"]').click();

    })

    test('drag and drop', async ({ page }) => {
        await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');
        const frame = page.frameLocator('//iframe[contains(@src,"droppable/photo-manager")]');
        await frame.locator('//h5[text()="High Tatras 2"]').dragTo(frame.locator('div[id="trash"]'));
    })

    