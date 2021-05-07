import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOrgsComponent } from './user-orgs.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserOrgsComponent,
    // resolve:
  },
];

@NgModule({
  declarations: [UserOrgsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserOrgsModule {}
