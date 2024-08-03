const{test , expect} = require('@playwright/test')


test('Handling Frames', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  
    const frame = await page.frame('#RESULT_TextField-0');
    if (frame) {
      await frame.fill('osama');
    } else {
      console.error('Frame #RESULT_TextField-0 not found');
    }
  
    const element = await page.$(`#q2 > table > tbody > tr:nth-child(1) > td > label`);
    if (element) {
      await element.check();
    } else {
      console.error('Element not found');
    }
    
    await page.waitForTimeout(5000);
  });
  