import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { GithubService } from './github.service';

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService],
    });
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
