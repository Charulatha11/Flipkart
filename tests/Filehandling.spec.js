import {test} from '@playwright/test';

// test('File handling', async ({ page }) => {
//   // Navigate to the page that handles file uploads
//   await page.goto('https://uploadnow.io/');
//   // await page.locator('//input[@type="file"]').setInputFiles("C:\\Users\\DELL\\Pictures\\Saved Pictures.png");
//   await page.locator('//input[@type="file"]').setInputFiles(["C:\\Users\\DELL\\Pictures\\Saved Pictures.png","C:\\Users\\DELL\\Pictures\\Screenshots\\Screenshot 2026-09-06 195014.png"]);
//   await page.getByRole('button', { name: 'Validate and upload' }).click();
//   await page.waitForTimeout(5000);
//   await page.screenshot({path:'./tests/screenshots/filehandling.png'});

// })

test ('Resume check', async ({ page }) => {
  await page.goto('https://enhancv.com');
  await page.getByRole('link', { name: 'Get Your Resume Score' }).click();
  await page.locator('input[type="file"]').nth(0)
  .setInputFiles("C:\\Users\\DELL\\Downloads\\atssampleresume.pdf");
  await page.waitForTimeout(5000);
})
