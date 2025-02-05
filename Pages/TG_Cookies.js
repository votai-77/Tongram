import { config } from "../Util/Config";
import fs from 'fs';
export class Cookies {
    constructor(page) {
        this.page = page;
    }
    async navigationUrl() {
        await this.page.goto(config.url);
        await this.page.reload();
    }
    async loginWithTelegram() {
        await this.page.getByRole('button', { name: 'Log In' }).click();
        const page1Promise = this.page.waitForEvent('popup');
        const page1 = await page1Promise;
        await page1.goto(config.telegramUrlUser);
        await page1.locator('#login-phone').fill('0329733010');
        await page1.getByRole('button', { name: 'Next' }).click();
    }
    async saveCookies(){
        const dir = config.cookieDir;
        if(!dir.existsSync(dir)){
            fs.mkdirSync(dir,{recursive: true});
        }
        const cookies = await this.page.context().cookies();
        const filePath = path.join(dir, config.cookieFilePath);
        fs.writeFileSync(filePath, JSON.stringify(cookies,null,2));
    }
}