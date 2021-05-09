import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { UserData } from '../interfaces/user-data';
import { UserOrganization } from '../interfaces/user-organition';
import { UserRepo } from '../interfaces/user-repo';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  username: BehaviorSubject<string> = new BehaviorSubject<any>(null);
  userRepos: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  userOrgs: BehaviorSubject<any> = new BehaviorSubject<any>( null );
  userData: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  getUsername(): string {
    return this.username.getValue();
  }

  getUserRepos(): Array<UserRepo> {
    return this.userRepos.getValue();
  }

  getUserOrgs(): Array<UserOrganization> {
    return this.userOrgs.getValue();
  }

  getUserData(): UserData {
    return this.userData.getValue();
  }
}
