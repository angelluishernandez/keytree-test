import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { UserData } from '../interfaces/user-data';
import { UserOrganization } from '../interfaces/user-organition';
import { UserRepo } from '../interfaces/user-repo';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  userRepos: BehaviorSubject<Array<UserRepo>> = new BehaviorSubject<any>(null);
  userOrgs: BehaviorSubject<Array<UserOrganization>> = new BehaviorSubject<any>(null);
  userData: BehaviorSubject<UserData> = new BehaviorSubject<any>(null);

  constructor() { }

  getUserRepos(): Array<UserRepo>{
    return this.userRepos.getValue();
  }

  getUserOrgs(): Array<UserOrganization>{
    return this.userOrgs.getValue();
  }

  getUserData(): UserData{
    return this.userData.getValue();
  }

}
