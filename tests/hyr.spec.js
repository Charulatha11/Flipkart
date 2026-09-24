import {test, expect} from '@playwright/test';

test('HYR tutorials', async ({ page }) => {
    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
    const frame = page.frameLocator('[id="frm3"]')
    const frame1 = frame.frameLocator('[src="https://www.hyrtutorials.com/p/basic-controls.html"]');
    await frame1.locator('#firstName').fill('Charu');
    await frame1.locator('#lastName').fill('L');
    await frame1.locator('#femalerb').check();
    await frame1.locator('#englishchbx').check();
    await frame1.locator('[placeholder="Enter Email"]').fill('charu@gmail.com');
  
})


