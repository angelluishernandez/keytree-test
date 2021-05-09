import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ErrorService } from '../services/error.service';
import { GithubService } from '../services/github.service';
@Injectable({
  providedIn: 'root',
})

/**
 * This class takes in a username string and then calls
 * the service method that gets all the user repos.
 */
export class UserReposResolver implements Resolve<any> {
  constructor(
    private githubService: GithubService,
    private errorService: ErrorService,
    private router: Router
  ) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<any | void> {
    try {
      const username: string = route.params.username;
      const userRepos = await this.githubService.getRepos(username);
      return userRepos;
    } catch (error) {
      this.errorService.handleHttpError(error);
      this.router.navigate(['/']);
    }
  }
}
