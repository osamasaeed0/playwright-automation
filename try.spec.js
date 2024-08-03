import { test, expect } from "@playwright/test";
// const { chromium } = require('playwright');


    test('open letcode', async ({page})=>{ 
            
            await page.goto("https://letcode.in/");
            await page.click('text= Log in')
            await page.fill('input[name="email"]', "k350@gmail.com")
            await page.fill('input[name="password"]', 'pass123$') 
            await page.click('button:text("LOGIN")')   
            await page.close();
            try{
                // await page.click('button:text("LOGIN")')
            }
         catch (error) {
            console.error('Test failed:', error);
            throw error;
         }
})    