import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserReposResolver } from './user-repos.resolver';
import { GithubService } from '../services/github.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserReposResolver', () => {
  let service: UserReposResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [GithubService]
    });
    service = TestBed.inject(UserReposResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
