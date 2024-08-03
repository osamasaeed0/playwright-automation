const{test,  expect} = require('@playwright/test')


test('Handling Multiple locators', async({page})=>{
    await page.goto('https://www.saucedemo.com/v1/inventory.html');
    // const selectingAllanchors = await page.$$('a');
    // for(const anchor of selectingAllanchors) {
    //     const links = await anchor.textContent();
    //     console.log('All anchors are =',links)
    // } 


    const collectingText = await page.$$('#contents_wrapper');
    for(const text of collectingText){
        const Text = await text.textContent();
        console.log('Text is =', Text);
    }
})