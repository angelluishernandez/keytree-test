import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from 'src/app/shared/layout/layout.module';
import { RouterModule, Routes } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

    children: [
      {
        path: 'user-organizations/:username',
        loadChildren: () =>
          import('../user-orgs/user-orgs.module').then((m) => m.UserOrgsModule),
      },
      {
        path: 'user-repos/:username',
        loadChildren: () =>
          import('../user-repos/user-repos.module').then(
            (m) => m.UserReposModule
          ),
      },
    ],
  },
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes),
  ],
})
export class DashboardModule {}
