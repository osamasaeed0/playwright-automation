const{test, expect , chromium} = require('@playwright/test')

test('Handling Multiple pages and opening new windows of the certain page' , async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();


    const page1 = await context.newPage();
 await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 await expect(page1).toHaveTitle('OrangeHRM');


 const mainPage= context.waitForEvent('page');
 await page1.locator('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-footer > div.orangehrm-copyright-wrapper > p:nth-child(2) > a').click();
 const newPage = await mainPage ;
 await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM");
 await page1.waitForTimeout(3000);
 await newPage.waitForTimeout(3000);
 await browser.close();
 
})