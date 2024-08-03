const {test , expect} =  require('@playwright/test')


    // ------------------------------------------------------------------------
    // Handling multiple dropdowns options 
    // ------------------------------------------------------------------------
test('Handling auto suggested dropdowns', async({page})=>{ 
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')
await page.locator('.multiselect').click();
    // await expect( page.locator('ul>li label input')).toHaveCount(11);
    const options = await page.$$('ul>li label');
    // await expect (options.length).toBe(11);
    for( const option of options)
    {
        const dropDown = await option.textContent();
        console.log('Options are =',dropDown);
        if(dropDown.includes("Java")|| dropDown.includes('Angular'))
        {
            await option.click();
        }
        
    }
    

    
})