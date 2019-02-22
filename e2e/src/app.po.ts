import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path?: string) {
    if (path) {
      return browser.get(browser.baseUrl + '/' + path) as Promise<any>;
    } else {
      return browser.get(browser.baseUrl) as Promise<any>;
    }    
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  selectCharacter(character: string) {
    return element(by.id('charSelect')).element(by.cssContainingText('option', character)).click() as Promise<void>;
  }

  selectCharacterMode(charMode: string) {
    return element(by.id('charModeSelect')).element(by.cssContainingText('option', charMode)).click() as Promise<void>;
  }

}
