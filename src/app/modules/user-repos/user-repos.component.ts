import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserRepo } from 'src/app/interfaces/user-repo';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss']
})
export class UserReposComponent implements OnInit {

  userRepos: Array<UserRepo> = [];


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userRepos = this.activatedRoute.snapshot.data.userRepos;
  }

}
