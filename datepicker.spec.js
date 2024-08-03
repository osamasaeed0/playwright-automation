const{test,expect}= require('@playwright/test')

test('Handling date pickers and Calenders', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.locator('#datepicker').fill('07/20/2024');
    const year = '2024' ; 
    const month = 'March' ;
    const day = '13' ;
    await page.locator('#datepicker').click
    while(true)
    {
    
   const currentYear = await page.locator('#ui-datepicker-div > div > div > span.ui-datepicker-year').textContent();
   const currentMonth = await page.locator('#ui-datepicker-div > div > div > span.ui-datepicker-month').textContent();
if( currentYear==year && currentMonth == month )
{
    break;
}
 await page.locator('#ui-datepicker-div > div > a.ui-datepicker-prev.ui-corner-all > span').click();

    }
    // const dates = await page .$$('//*[@id="ui-datepicker-div"]/table/tbody');
    // for(const dt of dates)
    // {
    //     if(await dt.textContent()==day )
    //     {
    //         await dt.click();
    //         break;
    //     }
    // }

    // await page.waitForTimeout(5000);
})