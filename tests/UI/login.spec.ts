import { test } from '@playwright/test';

import {BasePage} from "../../core/BasePage";

test('Login to Report Portal UI test', async ({ page }) => {
    const loginPage = new BasePage(page);
    await loginPage.goto('https://www.google.com');
})