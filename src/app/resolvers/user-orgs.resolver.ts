import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserData } from '../interfaces/user-data';
import { UserOrganition } from '../interfaces/user-organition';
import { GithubService } from '../services/github.service';
@Injectable({
  providedIn: 'root',
})

/**
 * This class takes in a username string and then calls
 * the service method that gets all the user Organization info.
 */
export class UserOrgsResolver implements Resolve<any> {
  constructor(private githubService: GithubService) {}

  async resolve(
    route: ActivatedRouteSnapshot
  ): Promise<{ userData: UserData; userOrgs: Array<UserOrganition> }> {
    const username: string = route.params.username;
    const results = await this.githubService.getUserOrgs(username);
    return results;
  }
}
