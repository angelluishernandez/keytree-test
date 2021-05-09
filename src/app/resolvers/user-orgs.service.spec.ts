import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GithubService } from '../services/github.service';
import { RouterTestingModule } from '@angular/router/testing';
import { UserOrgsResolver } from './user-orgs.resolver';

describe('UserOrgsResolver', () => {
  let service: UserOrgsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [GithubService],
    });
    service = TestBed.inject(UserOrgsResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });




});
