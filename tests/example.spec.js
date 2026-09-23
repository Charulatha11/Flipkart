// // @ts-check
// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


// import { test } from '@playwright/test';

// test('Find minimum price and its brand', async ({ page }) => {
//   await page.goto('https://www.myntra.com/boy-tshirts');

//   function findMinimumPrice(callback) {
//     const allPrices = page.locator(
//       '//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]'
//     );

//     allPrices.allTextContents()
//       .then((priceList) => {
//         const priceNumbers = priceList.map((price) =>
//           Number(price.replace(/[^0-9]/g, ''))
//         );

//         const minPrice = Math.min(...priceNumbers);
//         callback(null, minPrice);
//       })
//       .catch((error) => callback(error, null));
//   }

//   function getProductBrandByPrice(price, callback) {
//     const productLocator = page.locator(
//       `//li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and text()="${price}"]/ancestor::div[@class="product-productMetaInfo"]/descendant::h3[@class="product-brand"]`
//     );

//     productLocator.textContent()
//       .then((brandName) => callback(null, brandName))
//       .catch((error) => callback(error, null));
//   }

//   // First callback: find the minimum price
//   // Second callback: find the brand using that price
//   await new Promise((resolve, reject) => {
//     findMinimumPrice((error, minPrice) => {
//       if (error) return reject(error);

//       console.log('Minimum price:', minPrice);

//       getProductBrandByPrice(minPrice, (error, brandName) => {
//         if (error) return reject(error);

//         console.log('Product Brand:', brandName);
//         resolve();
//       });
//     });
//   });
// });



import { test } from '@playwright/test';

test('Find minimum price and its brand', async ({ page }) => {
  await page.goto('');

})