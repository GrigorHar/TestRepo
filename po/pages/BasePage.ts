import * as Playwright from 'playwright';

export class BasePage {
    constructor(public page: Playwright.Page) {}

    async goto(url: string) {
        await this.page.goto(url);
    }

}