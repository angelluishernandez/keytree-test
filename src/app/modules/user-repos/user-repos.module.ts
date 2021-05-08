import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserReposComponent } from './user-repos.component';
import { RouterModule, Routes } from '@angular/router';
import { UserReposResolver } from 'src/app/resolvers/user-repos.resolver';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {MatBadge, MatBadgeModule} from '@angular/material/badge';


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
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatBadgeModule,
    RouterModule.forChild(routes),
  ],
})
export class UserReposModule {}
