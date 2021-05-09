import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { GithubService } from './github.service';

describe('GithubService', () => {
  let service: GithubService;
  let httpClient: HttpClientModule;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService],
    });
    service = TestBed.inject(GithubService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request when calling getRepos and return an Array', async () => {
    const dummyResponse = [
      {
        clone_url: 'cloneurl',
        download_url: 'string',
        description: 'string',
        private: false,
        created_at: 'string',
        updated_at: 'string',
        html_url: 'string',
        stargazers_count: 0,
        name: 'string',
        git_url: 'string',
      },
      {
        clone_url: 'cloneurl',
        download_url: 'string',
        description: 'string',
        private: false,
        created_at: 'string',
        updated_at: 'string',
        html_url: 'string',
        stargazers_count: 0,
        name: 'string',
        git_url: 'string',
      },
    ];

    const promise = service.getRepos('angelluishernandedez');
    const req = httpTestingController.expectOne(
      'https://api.github.com/users/angelluishernandedez/repos?per_page=250'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(dummyResponse);
    const actual = await promise;
    expect(actual).toBe(dummyResponse);
    httpTestingController.verify();
  });
});
