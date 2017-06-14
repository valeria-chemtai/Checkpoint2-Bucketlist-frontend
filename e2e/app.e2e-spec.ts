import { Checkpoint2BucketlistFrontendPage } from './app.po';

describe('checkpoint2-bucketlist-frontend App', () => {
  let page: Checkpoint2BucketlistFrontendPage;

  beforeEach(() => {
    page = new Checkpoint2BucketlistFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
