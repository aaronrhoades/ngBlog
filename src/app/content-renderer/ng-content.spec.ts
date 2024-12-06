import { NgContent, NgContentType } from './ng-content';

describe('NgContent', () => {
  it('should create an instance', () => {
    expect(new NgContent(NgContentType.p, 'content')).toBeTruthy();
  });
});
