import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { UserReposComponent } from './user-repos.component';
import { RouterModule, Routes } from '@angular/router';
import { UserReposResolver } from 'src/app/resolvers/user-repos.resolver';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CustomExpandableModule } from 'src/app/shared/custom-expandable/custom-expandable.module';

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
  providers: [DatePipe],
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    CustomExpandableModule,
    RouterModule.forChild(routes),
  ],
})
export class UserReposModule {}
