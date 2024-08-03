const{test, expect } = require('@playwright/test');
const { ADDRGETNETWORKPARAMS } = require('dns');

test('Uploading files ', async ({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').click();
    await page.locator('#filesToUpload').setInputFiles(['tests/screenshots/1721750263812Homepage.png','tests/screenshots/1721750442214FullHomepage.png']);
    await page.waitForTimeout(5000);
    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText("1721750263812Homepage.png")
    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText("1721750442214FullHomepage.png")
    
})