import { BasePage } from "./BasePage"

export class CatalogPage extends BasePage{
    Locastors = {
        NameProduct: this.page.locator("//div[@class='catalog-masthead']//h1"),
        CheckModuleDescription: this.page.locator("//h3[@class ='product-specs__title']"),
        AddToCart: this.page.locator("//a[@data-position-id='475:2227254001' and contains(text(),'В корзину')]"),
        ProductAddedToCart: this.page.locator("//div[contains(text(),'Товар добавлен')]"),
        GoToCart: this.page.locator("//a[contains(text(),'Перейти в корзину')]"),
    }
    constructor(page){
        super(page);
    }
}