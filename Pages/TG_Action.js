import { expect } from "@playwright/test";

export class Action {
    constructor(page) {
        this.page = page;
    }
    async searchGame() {
        await page.getByPlaceholder('Search for your favorite apps').first().fill('Racing');
        await page.getByRole('banner').getByRole('link', { name: 'Racing Ton Racing Ton Racing' }).click();
        await page.locator('section').filter({ hasText: 'Racing TonRace, challenge,' }).getByRole('button').first().click();
        const page2Promise = page.waitForEvent('popup');
        await page.getByRole('button', { name: 'Launch' }).click();
        const page2 = await page2Promise;
        await page2.getByRole('link', { name: 'Open App' }).click();
    }
    async notification(){
        try{
            await page.locator('div:nth-child(4) > div > div > button').first().click();
            await expect(this.page.locator('div')).toHaveText("You have completed the task of App Sharer");

        }catch(e)
        {
            console.log("Error",e);
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