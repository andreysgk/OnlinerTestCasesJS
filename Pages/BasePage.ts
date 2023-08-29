import { test, expect } from '@playwright/test';
import type { Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;
    readonly pageLocator: string;

    constructor(page : Page, pageLocator: string = '') {
        this.page = page;
      }
    }