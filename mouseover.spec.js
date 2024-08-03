const{test,expect} = require('@playwright/test')


test('Mouse related everything is handled',async ({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/');
//  await page.locator('#narbar-menu > ul > li:nth-child(1) > a').hover();
// await page .locator ('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').hover();
// //  await openDesktop.hover();
// //  await macBook.hover();
// await page.locator('#form-currency > div > a > i').click({button:'left'})
// -------------------------------------------------------
// ------------------------------------------------------
await page .locator('#HTML10 > div.widget-content > button').dblclick()
await expect(page.locator('#field2')).toHaveValue('Hello World!')
 await page.waitForTimeout(5000);

 
})