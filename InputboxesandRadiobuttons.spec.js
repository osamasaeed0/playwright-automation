const{test, expect} =  require('@playwright/test')

test('Handling input boxes and Radio buttons', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    // await expect(page.locator(' #name')).toBeVisible();
    // await expect(page.locator('#name')).toBeEditable();
    // await expect(page.locator('#name')).toBeEmpty();
    // await expect(page.locator('#name')).toBeEnabled();
    // await page.locator('#name').fill("osama")


    // await page.locator('#sunday').check();
    // await expect (page.locator('#sunday')).toBeChecked();
    // await expect (page.locator('#sunday').isChecked).toBeTruthy();
    // await expect (page.locator('#monday').isChecked).toBeFalsy();

const checkBoxes = [ '#monday','#sunday','#wednesday'];
for(const locator of checkBoxes)
{
    await page.locator(locator).check();
}
   await page.waitForTimeout(5000);
   const CheckBoxes = [ '#monday','#sunday','#wednesday'];

   for(const zocator of CheckBoxes){
    if(await page.locator(zocator).isChecked())
    {
        await page.locator(zocator).uncheck();
}
    }

   


})