// import{test, expect} from '@playwright/test'

// Locating web elements *******

// test('Locators',async ({page})=>{

//    await  page.goto('https://www.google.com/')

//    const pageTitle= page.title();

//    await expect (page).toHaveTitle ('Google');
//    await expect (page).toHaveURL('https://www.google.com/');

//    await page.click ('//*[@id="gb"]/div/div[1]/div/div[1]/a')
//    await page.goto ('https://mail.google.com/mail/u/0/#inbox')

//    const threedots = page.locator ('//*[@id="gb"]/div[2]/div[1]/div[1]/svg')

//    await expect (threedots).toBeVisible
// await page.close();
// } )
// ----------------------------------------------
// Locatin multiple web elements and using looping statement **********
// ----------------------------------------------
// test('Locators',async ({page})=>{

//       await  page.goto('https://www.google.com/') 
//       page.waitForSelector('a')
//       const links=await page.$$('a');
//       for(const link of links) {
//          const linkText= await link.textContent();
//          console.log(linkText); 
//       }

//    } )
// const{test, expect} = require('@playwright/test')

// test( 'DifferentLocators1', async ({page})=> {

//    await page.goto('https://www.saucedemo.com/v1/index.html') 
     
//    const title = await page.title();
//    await expect (title).toBe ('Swag Labs')

//    // await page.check('SWAG LABS');
//    await page.fill('//*[@id="user-name"]', 'standard_user' );
//    await page.fill('//*[@id="password"]', 'secret_sauce');
//    await page.click ('//*[@id="login-button"]');
//    const logoutLink = page.locator ('//*[@id="inventory_filter_container"]/div');
//    await expect (logoutLink).toBeVisible();
//    await page.close()
   

   
// }) 


// test('test', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/v1/index.html');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.getByRole('button', { name: 'LOGIN' }).click();
//   await page.locator('#header_container div').nth(1).click();
//   await page.getByText('Products').click();
//   await page.getByRole('button', { name: 'Open Menu' }).click();
//   await page.getByRole('link', { name: 'All Items' }).click();
//   await page.getByRole('link', { name: 'Logout' }).click();
// });
// import { test, expect } from '@playwright/test'
// test(' Assertions Test', async ({page}) => {
//    await page.goto('https://demo.nopcommerce.com/register')
//    // This is for that the page has certain url or not
//    await expect(page).toHaveURL ('https://demo.nopcommerce.com/register');
// //  Now to check the title 
// await expect (page).toHaveTitle('nopCommerce demo store. Register');
// // Now to check the logo that it is visible or not 
// const logoElement = page.locator('body > div.master-wrapper-page > div.header > div.header-lower > div.header-logo');
// await expect(logoElement).toBeVisible();
// // Now to check that the control is enabled or not 
// const searchBox = page.locator('#small-searchterms');
// await expect (searchBox).toBeEnabled();
// // Now to check the radio buttons and check boxes 
// const radioButton = page.locator('#gender-male');
// await radioButton.click();
// await expect(radioButton).toBeChecked();
// await expect (page.locator('#main > div > div > div > div.page-body > form > div:nth-child(3) > div.form-fields > div > label')).toBeChecked();

// await expect (page.locator('#main > div > div > div > div.page-title > h1')).toHaveText('Register');
// await expect (page.locator('#main > div > div > div > div.page-title > h1')).toContainText('Reg');
// const inputValue = page.locator('#Email');
// inputValue.fill ('osama123@gmail.com');
// await expect(inputValue).toHaveValue('osama123@gmail.com');
// const countingCounts= page.locator('');
// await expect (countingCounts).toHaveCount(13);

// await page.close();
// })

// test('Handling input and checkboxes and radio buttons', async ({page})=>{
//  await page.goto('https://testautomationpractice.blogspot.com/');
//  await expect (page.locator('#name')).toBeVisible();
//  await expect (page.locator('#name')).toBeEmpty();
//  await expect (page.locator('#name')).toBeEnabled();
//  await expect (page.locator('#name')).toBeEditable();

// await page.locator('#name').fill('osama');

// await page.locator('#male').check();
// await expect(page.locator('#male')).toBeChecked();
// await expect(page.locator('#male').isChecked()).toBeTruthy();
// await expect(await page.locator('#female').isChecked()).toBeFalsy();

// await page.locator('#sunday').check();
// await expect(page.locator('#sunday')).toBeChecked();
// await expect(page.locator('#sunday').isChecked()).toBeTruthy();
// await expect(await page.locator('#monday').isChecked()).toBeFalsy();

// await page .waitForTimeout(5000);
// const Selector =[ '#tuesday', '#monday','#sunday' ];
// for(const locator of Selector) {
//     await page.locator(locator).check();
// }
// for(const locator of Selector)
// {
//     if(await page.locator(locator).isChecked())
//         {
// await page.locator(locator).uncheck();
//     }
//     }
// })
