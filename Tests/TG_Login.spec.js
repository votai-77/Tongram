import{test} from '@playwright/test';
import { Login } from '../Pages/TG_Login';

test("Login", async({page})=>{
    const login = new Login(page);
    await login.loginAccount();
});


// await page1.goto('https://oauth.telegram.org/auth/push?bot_id=7241997507&origin=https%3A%2F%2Ftongram.app&request_access=true&return_to=https%3A%2F%2Ftongram.app%2F');
