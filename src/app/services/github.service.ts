import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

export const GITHUB_BASE_URL = 'https://api.github.com';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private httpClient: HttpClient) {}

  async getRepos(username: string): Promise<any> {
    try {
      const url = `${GITHUB_BASE_URL}/users/${username}/repos?per_page=250`;
      const response = await this.httpClient.get(url).toPromise();
      return response;
    } catch (error) {
      // Handle error service
    }
  }

  async getUserOrgs(username: string): Promise<any> {
    try {
      const userDataUrl = `${GITHUB_BASE_URL}/users/${username}`;
      const userOrgsUrl = `${GITHUB_BASE_URL}/users/${username}/orgs`;
      const userData: Observable<any> = this.httpClient.get(userDataUrl);
      const userOrgs: Observable<any> = this.httpClient.get(userOrgsUrl);
      const responses: any = await forkJoin([userData, userOrgs]).toPromise();
      const results = {
        userData: responses[0],
        userOrgs: responses[1],
      };
      return results;
    } catch (error) {
      // Handle error service
    }
  }
}
