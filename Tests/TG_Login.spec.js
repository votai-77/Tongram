import{test} from '@playwright/test';
import { Login } from '../Pages/TG_Login';

test("Login", async({page})=>{
    const login = new Login(page);
    await login.loginAccount();
});