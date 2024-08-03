const {test , expect} =  require('@playwright/test')


    // ------------------------------------------------------------------------
    // Handling Auto sugggest dropdown  option 
    // ------------------------------------------------------------------------
test('Handling auto suggested dropdowns', async({page})=>{ 
    await page.goto('https://www.redbus.in/');
    
await page.locator('#src').click();
await page.locator('#src').fill('Dehli');
await page.waitForSelector('//*[@id="autoSuggestContainer"]/div/div/div[1]/div/div[1]/ul');
const options = await page.$$('//*[@id="autoSuggestContainer"]/div/div/div[1]/div/div[1]/ul');
for( let option of options)
{
    const value = await option.textContent();
    console.log("value =",value);
    if( value.includes('Anand Vihar')){
        await option.click();
    }
}
 await page.waitForTimeout(5000);
})
