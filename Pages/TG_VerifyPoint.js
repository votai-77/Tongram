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
    convertToPoint(pointText) {
        if (pointText.includes('K')) {
            return parseFloat(pointText.replace('K', '')) * 1000;
        }
        else if (pointText.includes('M')) {
            return parseFloat(pointText.includes('M', '')) * 1000000;
        } else if (pointText.includes('M')) {
            return parseFloat(pointText.includes('B', '')) * 1000000000;
        } else if (pointText.includes('M')) {
            return parseFloat(pointText.includes('T', '')) * 1000000000000;
        } else {
            return parseFloat(pointText);
        }
    }
    async verifyPoint() {
        try {
            const pointText1 = await
        } catch (e) {
            console.log("Error", e);
        }
    }
}