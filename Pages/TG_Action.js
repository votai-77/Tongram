import { expect } from "@playwright/test";
import { config } from "../Util/Config";
const fs = require('fs');
const path = require('path'); 

export class Action {
    constructor(page) {
        this.page = page;
    }

    async LoginAccountTelegram(){
        try {
            const cookiesPath = path.join(config.cookieDir, config.cookiesFile);
            const cookies = JSON.parse(fs.readFileSync(cookiesPath, 'utf-8'));
            await this.page.context().addCookies(cookies);
            await this.page.goto(config.tongramUrl);
            await this.page.waitForLoadState('networkidle');  
            console.log('✅ Page loaded successfully with cookies.');
          } catch (error) {
            console.error('❌ Error during login:', error.message);
            throw error;  
          }
    }
    async searchGame() {

        await this.page.getByPlaceholder('Search for your favorite apps').first().click();
        await this.page.getByPlaceholder('Search for your favorite apps').first().fill('Racing Ton');
        await this.page.getByRole('banner').getByRole('link', { name: 'Racing Ton Racing Ton Racing' }).click();
        await page.locator('section').filter({ hasText: 'Racing TonRace, challenge,' }).getByRole('button').first().click();

        await this.page.waitForTimeout(2000);

        const page2Promise = this.page.waitForEvent('popup');
        await this.page.getByRole('button', { name: 'Launch' }).click();
        const page2 = await page2Promise;
        await page2.getByRole('link', { name: 'Open App' }).click();
    }
    async notification() {
        try {
            await this.page.locator('div:nth-child(4) > div > div > button').first().click();
            await expect(this.page.locator('div')).toHaveText("You have completed the task of App Sharer");

        } catch (e) {
            console.log("Error", e);
        }
    }
    async shareGame() {
        await page.getByRole('button', { name: 'Share' }).click();
        await page.locator('.flex > svg:nth-child(5) > path').first().click();
    }
    async reviewGame() {
        await page.getByPlaceholder('What is on your mind?').fill('Good');
        await page.locator('.flex > svg:nth-child(5) > path').first().click();
        await page.getByRole('button', { name: 'Submit', exact: true }).click();
        await page.getByText('This field is required!').click();
        await page.getByRole('button', { name: '4' }).click();
    }
}