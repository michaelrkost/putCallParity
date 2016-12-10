import { PutCallParityPage } from './app.po';

describe('put-call-parity App', function() {
  let page: PutCallParityPage;

  beforeEach(() => {
    page = new PutCallParityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mrk works!');
  });
});
