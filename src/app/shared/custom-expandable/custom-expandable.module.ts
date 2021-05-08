import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomExpandableComponent } from './custom-expandable.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { CustomContentModule } from '../custom-content/custom-content.module';

@NgModule({
  declarations: [CustomExpandableComponent],
  imports: [
    CommonModule,
    CustomContentModule,
    MatExpansionModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
  ],
  exports: [CustomExpandableComponent],
})
export class CustomExpandableModule {}
