import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserData } from '../interfaces/user-data';
import { UserOrganization } from '../interfaces/user-organition';
import { ErrorService } from '../services/error.service';
import { GithubService } from '../services/github.service';
@Injectable({
  providedIn: 'root',
})

/**
 * This class takes in a username string and then calls
 * the service method that gets all the user Organization info.
 */
export class UserOrgsResolver implements Resolve<any> {
  constructor(
    private githubService: GithubService,
    private errorService: ErrorService,
    private router: Router
  ) {}

  async resolve(
    route: ActivatedRouteSnapshot
  ): Promise<{ userData: UserData; userOrgs: Array<UserOrganization> } | void> {
    try {
      const username: string = route.params.username;
      const results = await this.githubService.getUserOrgs(username);
      return results;
    } catch (error) {
      this.router.navigate(['/']);
    }
  }
}
