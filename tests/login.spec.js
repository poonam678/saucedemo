
import {test} from "@playwright/test"
 test("login",async({page})=>{

await page.goto("https://www.saucedemo.com/")
await page.locator('//input[@id="user-name"]').click()
await page.locator('//input[@id="password"]').click()
await page.locator('//input[@id="login-button"]').click()
//tring time trigger 

 })