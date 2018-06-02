import { $$, browser, ElementArrayFinder, ElementFinder } from 'protractor';
import { convertToES6Promise } from '../utils/utils';

const ALL_FEATURES_SELECTOR = 'ul li';

export class WelcomPage {
  public navigateTo(): Promise<any> {
    return convertToES6Promise(browser.get('/'));
  }

  public get allBoilerplateFeatures(): ElementArrayFinder {
    return $$(ALL_FEATURES_SELECTOR);
  }

  public getBoilerplateFeatureText(nth: number): Promise<string> {
    return convertToES6Promise(this.allBoilerplateFeatures.get(nth).getText());
  }
}
