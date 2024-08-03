const{test,expect} = require('@playwright/test')

test.skip('Page Screenshot', async({page})=>{
    await page.goto('https://demo-opencart.com/');
    await page.screenshot({path:"tests/screenshots/"+ Date.now() + 'Homepage.png'})
})

test.skip('Full Page Screenshot', async({page})=>{
    await page.goto('https://demo-opencart.com/');
    await page.screenshot({path:"tests/screenshots/"+ Date.now ()+ 'FullHomepage.png',fullPage:true})
})

test.only('Page Element Screenshot', async({page})=>{
    await page.goto('https://demo-opencart.com/');
    await page.locator('//*[@id="content"]/div[2]/div[2]').screenshot({path:"tests/screenshots/"+ Date.now() + 'Element Homepage.png'})
})
