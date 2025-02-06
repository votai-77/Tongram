import {test} from '@playwright/test';
import { Cookies } from '../Pages/TG_Cookies';

test('Cookies Tongram',async({page})=>{
    const tongram = new Cookies(page);
    await tongram.navigationUrl();
    await tongram.loginWithTelegram();
    await tongram.saveCookies();
})