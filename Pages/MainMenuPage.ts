import { BasePage } from "./BasePage";

export class MainPage extends BasePage{
    Locators = {
        SearchBar: this.page.locator("//input[@class='fast-search__input']"),
        Iframe: this.page.frameLocator("//iframe[@class='modal-iframe']"),
        FirstProduct: this.page.locator("//ul[@class='search__results']"),
    };
    
    constructor(page){
        super(page);
    }
}