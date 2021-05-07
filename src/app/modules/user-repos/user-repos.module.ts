import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserReposComponent } from './user-repos.component';
import { RouterModule, Routes } from '@angular/router';
import { UserReposResolver } from 'src/app/resolvers/user-repos.resolver';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: UserReposComponent,
    resolve: {
      userRepos: UserReposResolver,
    },
  },
];

@NgModule({
  declarations: [UserReposComponent],
  imports: [CommonModule, MatCardModule, RouterModule.forChild(routes)],
})
export class UserReposModule {}
