const{test, expect}= require('@playwright/test')


test('Handling web pages and Pagination', async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const fullTable = await page.locator('#productTable');
    const columns = await fullTable.locator (' thead th ');
    console.log('Number of columns are =',await  columns.count());
    await expect( await columns.count()).toBe(4);
    

    const rows = await fullTable.locator (' tbody tr  ');
    console.log('Number of rows are =',await  rows.count());
    await expect( await rows.count()).toBe(5);


    //  const machedRows = rows.filter({
    //     has:page.locator('td'),
    //     hasText: 'Product 4'
    // })
    // await machedRows.locator('input').check();


// await selectProducts(rows,page,'Product 1')
//     await selectProducts(rows,page,'Product 3')
//     await selectProducts(rows,page,'Product 4')
// for (let i=0; i<await rows.count(); i++){

//     const row = rows.nth(i);
//     const tds = row.locator('td');
//     for(let j=0; j< await tds.count();j++) {
//         console.log(await tds.nth(j).textContent());

//     }
// }
 const pages = await page.locator('.pagination li a')
 console.log('Number of pages in the table',await pages.count());
 for(let p=0; p<await pages.count(); p++ ){
     if(p>0){
        await pages.nth(p).click();
     }
     for (let i=0; i<await rows.count(); i++){

        const row = rows.nth(i);
        const tds = row.locator('td');
        for(let j=0; j< await tds.count()-1;j++) {
            console.log(await tds.nth(j).textContent());
    
        }
    }
 }

})

    
  

// async function selectProducts(rows,page,name){
//     const machedRows = rows.filter({
//         has:page.locator('td'),
//         hasText: name
//     })
//     await machedRows.locator('input').check();


// }
