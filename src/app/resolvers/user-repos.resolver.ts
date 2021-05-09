import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserRepo } from '../interfaces/user-repo';
import { GithubService } from '../services/github.service';
import { StoreService } from '../services/store.service';
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
    private storeService: StoreService,
    private router: Router
  ) {}



  async resolve(route: ActivatedRouteSnapshot): Promise<any | void> {
    try {
      const username: string = route.params.username;

      /**
       * If there's nothing stored in call the service
       */


      if(!this.storeService.getUserRepos()){
        const userRepos = await this.githubService.getRepos(username);
        this.storeService.userRepos.next(userRepos)
      }


      return this.storeService.getUserRepos();
    } catch (error) {
      this.router.navigate(['/']);
    }
  }
}
