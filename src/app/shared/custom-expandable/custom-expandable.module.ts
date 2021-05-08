import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomExpandableComponent } from './custom-expandable.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [CustomExpandableComponent],
  imports: [CommonModule, MatExpansionModule],
})
export class CustomExpandableModule {}
