const{test,  expect} = require('@playwright/test')


test('Handling locators', async({page})=>{
    await page.goto('https://www.saucedemo.com/v1/index.html')
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    
    await expect(page).toHaveTitle('Swag Labs');

    await page.locator('#menu_button_container > div > div:nth-child(3) > div > button').click();
    await page.locator('#logout_sidebar_link').click();
    await page.close();

})