import { ApiAngularPage } from './app.po';

describe('api-angular App', () => {
  let page: ApiAngularPage;

  beforeEach(() => {
    page = new ApiAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
