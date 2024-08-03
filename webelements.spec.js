const{test,  expect} = require('@playwright/test')


test('Handling Multiple locators', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const logo = page.getByAltText('company-branding');
    await expect (logo).toBeVisible();

})