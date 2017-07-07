import { Demo.Spring.ClientPage } from './app.po';

describe('demo.spring.client App', () => {
  let page: Demo.Spring.ClientPage;

  beforeEach(() => {
    page = new Demo.Spring.ClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
