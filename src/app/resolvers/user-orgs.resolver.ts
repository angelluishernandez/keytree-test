import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserData } from '../interfaces/user-data';
import { UserOrganization } from '../interfaces/user-organition';
import { GithubService } from '../services/github.service';
import { StoreService } from '../services/store.service';
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
    private storeService: StoreService,
    private router: Router
  ) {}

  async resolve(
    route: ActivatedRouteSnapshot
  ): Promise<{ userData: UserData; userOrgs: Array<UserOrganization> } | void> {
    try {

      /**
       * If there's no userOrgs and userData in the store call the service
       */
      if(!this.storeService.getUserOrgs() && !this.storeService.getUserData()){
        const username: string = route.params.username;
        const {userData, userOrgs} = await this.githubService.getUserOrgs(username);
        this.storeService.userData.next(userData);
        this.storeService.userOrgs.next(userOrgs);
      }
      return {
        userData: this.storeService.getUserData(),
        userOrgs: this.storeService.getUserOrgs()
      }

    } catch (error) {
      this.router.navigate(['/']);
    }
  }
}
