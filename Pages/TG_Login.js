import { config } from "../Util/Config";

export class Login {
    constructor(page) {
        this.page = page;
    }
    async loginAccount() {
        await this.page.goto('https://tongram.app/');
        const page1Promise = this.page.waitForEvent('popup');
        await this.page.getByRole('button', { name: 'Log In' }).click();
        const page1 = await page1Promise;
        await page1.locator('#login-phone').click();
        await page1.locator('#login-phone').fill('0329733010');
        await page1.getByRole('button', { name: 'Next' }).click();
        await this.page.waitForTimeout(10000);
        await this.page.goto('https://tongram.app/');

    }
    async saveCookies(){
        const dir = config.cookieDir;
        const cookie = await this.page.context().cookie();
        const filePath = path.join(dir, config.cookieFilePath)
        if()
    }
}