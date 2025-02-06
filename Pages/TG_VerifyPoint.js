import { config } from "../Util/Config";

export class VerifyPoint {
    constructor(page) {
        this.page = page;
    }
    async Login() {
        try {
            const cookiesPath = path.join(config.cookieDir, config.cookieFilePath);
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
}