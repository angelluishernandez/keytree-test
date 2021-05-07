import { TestBed } from '@angular/core/testing';

import { UserReposResolver } from './user-repos.resolver';

describe('UserReposResolver', () => {
  let service: UserReposResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserReposResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
