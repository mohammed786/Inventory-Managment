import { FabircAppPage } from './app.po';

describe('fabirc-app App', () => {
  let page: FabircAppPage;

  beforeEach(() => {
    page = new FabircAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
