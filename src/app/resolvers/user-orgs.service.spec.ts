import { TestBed } from '@angular/core/testing';

import { UserOrgsResolver } from './user-orgs.resolver';

describe('UserOrgsResolver', () => {
  let service: UserOrgsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserOrgsResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
