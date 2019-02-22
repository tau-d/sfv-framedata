import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  
  it('should redirect to Abigail page', () => {
    page.navigateTo().then(function() {
      expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/Abigail');
    });
  });

  it('should navigate to selected character/mode pages', () => {
    page.navigateTo().then(function() {
      const newChar = 'Akuma';
      page.selectCharacter(newChar).then(function() {
        expect(browser.getCurrentUrl()).toBe(`${browser.baseUrl}/${newChar}`);
      });
      const newMode = 'vtOne';
      page.selectCharacterMode(newMode).then(function() {
        expect(browser.getCurrentUrl()).toBe(`${browser.baseUrl}/${newChar};charMode=${newMode}`);
      })
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
