const {test, expect} = require('@playwright/test')


test( 'Home Page',async ({page}) => {
    await page.goto( 'https://www.google.com/')

    // const PageTitle = page.title();

    
    await  expect( page) .toHaveTitle("Google");

    await expect (page).toHaveURL ('https://www.google.com/');

await page.close();
    
}  )