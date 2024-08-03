const{test, expect} = require('@playwright/test')

test('Dropdpwns and multiple ways to select', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    // Different methods of selecting dropdowns
    // await page.locator('#country').selectOption({label: 'Japan'});
    // await page.locator('#country').selectOption({index: 'Japan'});
    // await page.locator('#country').selectOption({value:'Japan'});
    await page.locator('#country').selectOption('Japan'); 
    // await page.locator.selectOption('#country', 'Japan');
    // ------------------------------------------------------------
// now to check the total number of options in dorpdown
// ---------------------------------------------------------
// await expect (page.locator('#country option')).toHaveCount(10);
const options= await page.$$('#country option');
console.log( 'options are = ', options.length);
const contentT = await  page.$$('#country option');
// let status = false
for(const content of contentT )
    {
    // console.log(await content.textContent());
    const valueText = await content.textContent();
         console.log('Country names are =',valueText);
//     if(value.includes('France') )
//     {
//         status=true;
//         break;
//     }
//    await  expect (status).toBeTruthy
}



// await expect (contentT.includes('Japan')).toBeTruthy();



       await page.waitForTimeout(3000); 
    })