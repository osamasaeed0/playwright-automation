const{test, expect} = require('@playwright/test')

test('Dropdpwns and multiple ways to select', async ({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    const goingUp= await page.locator("#box7") ;
    const goingDown= await page.locator("#box106"); 
    await goingUp.hover();
    await page.mouse.down();
    await goingDown.hover();
    await page.mouse.up();
    await page.waitForTimeout(5000);
})