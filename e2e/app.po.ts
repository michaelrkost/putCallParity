import { browser, element, by } from 'protractor';

export class PutCallParityPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mrk-root h1')).getText();
  }
}
