// 1. Total number of products

// import { test } from '@playwright/test';

// test('Find minimum price', async ({ page }) => {
//     await page.goto("https://www.myntra.com/boy-tshirts");
//     const product = await page.locator('//li[@class="product-base"]');
//     const total = product.count();
//     console.log(total);
//     })

// 2. min price

// import { test } from '@playwright/test';

// test('Find minimum price', async ({ page }) => {
//     await page.goto("https://www.myntra.com/boy-tshirts");


//     const allPrices = page.locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]');
//     // await allPrices.first().waitFor({ timeout: 60000 });

//     // const totalProductslist = await allPrices.count();
//     let priceList = await allPrices.allTextContents();
//     let Price = priceList.map((price) => Number(price.replace(/[^0-9]/g, '')));
//     let minPrice = Math.min(...Price)
//     console.log('Minimumprice ' + minPrice);
//     //       console.log('Total Products ' + totalProductslist);   


//     async function getProductBrandByPrice(price) {
//         const productLocator = page.locator(`//li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and text()="${price}"]/ancestor::div[@class="product-productMetaInfo"]/descendant::h3[@class="product-brand"]`);

//         return await productLocator.textContent();

//     }

//     // Call the function
//     const productname = await getProductBrandByPrice(minPrice);
//     console.log("Product Brand:", productname);

// })


//////////////////////using callback function////////////////////////////

// import { test } from '@playwright/test';

// test('Find minimum price and its brand', async ({ page }) => {
//   await page.goto('https://www.myntra.com/boy-tshirts');

//   async function findMinimumPrice(callback) {
//     const allPrices = page.locator(
//       '//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]'
//     );

//     const priceList = await allPrices.allTextContents();

//     const priceNumbers = priceList.map((price) =>
//       Number(price.replace(/[^0-9]/g, ''))
//     );

//     const minPrice = Math.min(...priceNumbers);

//     callback(minPrice);
//   }

//   async function getProductBrandByPrice(price, callback) {
//     const productLocator = page.locator(
//       `//li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and text()="${price}"]/ancestor::div[@class="product-productMetaInfo"]/descendant::h3[@class="product-brand"]`
//     );

//     const brandName = await productLocator.textContent();

//     callback(brandName);
//   }

//   await new Promise((resolve) => {
//     findMinimumPrice((minPrice) => {
//       console.log('Minimum price:', minPrice);

//       getProductBrandByPrice(minPrice, (brandName) => {
//         console.log('Product Brand:', brandName);
//         resolve();
//       });
//     });
//   });
// });


// import { test } from '@playwright/test';

// test('Find minimum price and its brand', async ({ page }) => {
//     await page.goto('https://www.myntra.com/boy-tshirts');

//       async function getProductBrandByPrice(price) {
//         const productLocator = page.locator(
//           `//li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and text()="${price}"]/ancestor::div[@class="product-productMetaInfo"]/descendant::h3[@class="product-brand"]`
//         );

//         return await productLocator.textContent();
//       }
//     //////////////discounted product min price and brand //////////////////////

//       async function findMinimumPriceofdiscountedproducts() {
//         const allPrices = page.locator(
//           '//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]'
//         );

//         const priceList = await allPrices.allTextContents();

//         const priceNumbers = priceList.map((price) =>
//           Number(price.replace(/[^0-9]/g, ''))
//         );

//         const minPrice = Math.min(...priceNumbers);

//         console.log('Minimum price:', minPrice);

//         // Calling the product-brand function inside this function
//         const brandName = await getProductBrandByPrice(minPrice);

//         console.log('Product Brand:', brandName);
//       }

//       await findMinimumPriceofdiscountedproducts();



//     ////////////////////////Total product min price and brand //////////////////////
//     async function getProductBrandByPriceoftotalproduct(price) {

//         const productLocator1 = page.locator(`//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[(@class="product-discountedPrice" and contains(.,"${price}") or contains(.,"${price}") and not(@class))]/ancestor::div[@class="product-productMetaInfo"]/descendant::h3[@class="product-brand"]`);

//         return await productLocator1.allTextContents();
//     }



//     async function findMinimumPriceofallproducts() {
//         const alltotalPrices = page.locator(
//             '//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[(@class="product-discountedPrice") or (text() and  not (@class))]');

//         const totalpriceList = await alltotalPrices.allTextContents();

//         const totalpriceNumbers = totalpriceList.map((price) =>
//             Number(price.replace(/[^0-9]/g, ''))
//         );

//         const minPrice1 = Math.min(...totalpriceNumbers);

//         console.log('Minimum price:', minPrice1);


//         // Calling the product-brand function inside this function
//         const brandName = await getProductBrandByPriceoftotalproduct(minPrice1);

//         console.log('Product Brand:', brandName);
//     }

//     await findMinimumPriceofallproducts();

    

// });

