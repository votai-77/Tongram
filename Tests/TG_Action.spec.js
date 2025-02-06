import {test} from '@playwright/test';
import { Action } from '../Pages/TG_Action';


let page;
let action;
test.beforeEach(async({page})=>{
    action = new Action(page);
    

});
test("Login account with telegram", async({page})=>{
    await action.LoginAccountTelegram();
    // await action.searchGame();
})