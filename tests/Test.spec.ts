import { expect, test } from "@playwright/test";
import { MainPage } from "../Pages/MainMenuPage";
import { CatalogPage } from "../Pages/CatalogPage";
let page;
    test.beforeEach(async ({browser}) => {
        page = await browser.newPage();
        await page.goto('https://www.onliner.by/');
    });

test('search product', async () => {
    let mainMenu = new MainPage(page);
    let catalog = new CatalogPage(page);
    await mainMenu.Locators.SearchBar.fill("Смартфон Samsung Galaxy A52 SM-A525F/DS 4GB/128GB (черный)");
    // Переключил iframe
    const swichToIframe = await mainMenu.Locators.Iframe.locator(mainMenu.Locators.FirstProduct);
    await swichToIframe.click();
    await expect(catalog.Locastors.NameProduct).toHaveText("Смартфон Samsung Galaxy A52 SM-A525F/DS 4GB/128GB (черный)");
  });