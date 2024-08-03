const{test, expect , chromium} = require('@playwright/test')

test('Handling new pages and Windows' , async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();


    const page1 = await context.newPage();

await page1.goto('https://www.google.com/')
await expect (page1).toHaveTitle('Google');


    const page2 = await context.newPage();
    await page2.goto ('https://www.saucedemo.com/v1/index.html')
    await expect (page2).toHaveTitle('Swag Labs');

})
// npm install -g allure-commandline --save-dev