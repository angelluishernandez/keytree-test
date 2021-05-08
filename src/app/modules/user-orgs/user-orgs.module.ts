import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOrgsComponent } from './user-orgs.component';
import { RouterModule, Routes } from '@angular/router';
import { UserOrgsResolver } from '../../resolvers/user-orgs.resolver';
import { MatCardModule } from '@angular/material/card';
import { CustomExpandableModule } from 'src/app/shared/custom-expandable/custom-expandable.module';
import {MatTabsModule} from '@angular/material/tabs';
import { CustomContentModule } from 'src/app/shared/custom-content/custom-content.module';

const routes: Routes = [
  {
    path: '',
    component: UserOrgsComponent,
    resolve: {
      payload: UserOrgsResolver,
    },
  },
];

@NgModule({
  declarations: [UserOrgsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    CustomExpandableModule,
    CustomContentModule,
    MatTabsModule,
    RouterModule.forChild(routes),
  ],
})
export class UserOrgsModule {}
