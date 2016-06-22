import { ChocolatePage } from './app.po';

describe('chocolate App', function() {
  let page: ChocolatePage;

  beforeEach(() => {
    page = new ChocolatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
