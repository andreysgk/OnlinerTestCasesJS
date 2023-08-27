import { BasePage } from "./BasePage"

export class CatalogPage extends BasePage{
    Locastors = {
        NameProduct: this.page.locator("//div[@class='catalog-masthead']//h1"),
    }
    constructor(page){
        super(page);
    }
}