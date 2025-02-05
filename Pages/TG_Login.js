import { config } from "../Util/Config";
import fs from "fs";
import path from "path";
export class Login {
    constructor(page) {
        this.page = page;
    }
    async loginAccount() {
        await this.page.goto('https://tongram.app/');
        await this.page.reload();
        const page1Promise = this.page.waitForEvent('popup');
        await this.page.getByRole('button', { name: 'Log In' }).click();
        const page1 = await page1Promise;
        await page1.locator('#login-phone').click();
        await page1.locator('#login-phone').fill('0329733010');
        await page1.getByRole('button', { name: 'Next' }).click();
        await this.saveCookies();
        await this.page.waitForTimeout(10000);
        await this.page.goto('https://tongram.app/');

    }
    async saveCookies(){
        const dir = config.cookieDir;
        const cookies = await this.page.context().cookies();
        const filePath = path.join(dir, config.cookieFilePath)
        if(!fs.existsSync(dir))
        {
            fs.mkdirSync({dir,recursive: true});
        }
        fs.writeFileSync(filePath, JSON.stringify(cookies, null,2));
    }
}