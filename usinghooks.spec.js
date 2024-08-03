const{test , expect} = require('@playwright/test');

let page ;

test.beforeEach(async ({browser})=>{
    page=await browser.newPage();
    await page.goto('https://www.saucedemo.com/v1/index.html');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
   
})

test.afterEach( async({browser})=>{
    
    await page.locator('#menu_button_container > div > div:nth-child(3) > div > button').click()
    await page.locator('#logout_sidebar_link').click()
})

test('Testing', async()=>{
    await page.waitForSelector('#item_4_title_link > div');

    await page.locator('#item_4_title_link > div').click()
    await page.locator('#inventory_item_container > div > div > div > button').click()
    // await page.locator('#cart_contents_container > div > div.cart_list > div.cart_item').click()
    
})