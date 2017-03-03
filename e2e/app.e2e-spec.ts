import { ServicesAndDiPage } from './app.po';

describe('services-and-di App', () => {
  let page: ServicesAndDiPage;

  beforeEach(() => {
    page = new ServicesAndDiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
