import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { GithubService } from '../services/github.service';
@Injectable({
  providedIn: 'root',
})

/**
 * This class takes in a username string and then calls
 * the service method that gets all the user repos.
 */
export class UserReposResolver implements Resolve<any> {
  constructor(private githubService: GithubService) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<any> {
    const username: string = route.params.username;
    const userRepos = await this.githubService.getRepos(username);
    return userRepos;
  }
}
