const{test,expect} = require('@playwright/test')

test('Assertions', async({page})=>{
    await page.goto ('https://demo.nopcommerce.com/register');
    await expect(page).toHaveTitle ( "nopCommerce demo store. Register");
    await expect (page).toHaveURL('https://demo.nopcommerce.com/register');
    await expect (page.locator('#small-searchterms')).toBeEnabled();
    await expect (page.locator('body > div.master-wrapper-page > div.header > div.header-lower > div.header-logo > a > img')).toBeVisible();
await page.locator('#gender-male').click();
await expect(page.locator('#gender-male')).toBeChecked
const Value = await page.locator('#FirstName');
await Value.fill('Osama');
await expect(Value).toHaveValue('Osama');
await expect (page.locator('')).toHaveCount(13);
})



// select[name="DateOfBirthMonth"] option