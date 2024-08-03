const{test, expect} = require('@playwright/test')




test( 'Handling keyboard actions', async ({page})=>{
    await page.goto('https://gotranscript.com/text-compare');

    await page.fill('[name="text1"]','Osama saeed is a tester ');
    // await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('Tab');
   
    await page.keyboard.press('Control+V'); 
    await page.waitForTimeout(5000);
})
// test( 'Handling keyboard actions', async ({page})=>{
//     await page.goto('https://gotranscript.com/text-compare');
  
//     // Assuming there's a unique element with name="text1"
//     await page.fill('$("textarea[placeholder=Paste one version of the text here.]' ,'Osama saeed is a tester ');
  
//     // Simulate copy (might be browser specific)
//     await page.keyboard.press('Control+C');
  
//     // Focus the next element (potentially remove tab actions)
//     await page.keyboard.press('Tab');
  
//     // Simulate paste
//     await page.keyboard.press('Control+V');
  
//     // Wait for a specific element to appear after pasting (replace with your logic)
//     // await page.waitForSelector('.pasted-content'); // hypothetical selector

//     await page.waitForTimeout(5000);
//   })