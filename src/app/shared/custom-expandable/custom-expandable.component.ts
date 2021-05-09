import { Component, OnInit } from '@angular/core';
import { ExpandableItems } from 'src/app/interfaces/expandable-config';
import { AbstractModuleComponent } from '../abstract/abstract.module';

@Component({
  selector: 'app-custom-expandable',
  templateUrl: './custom-expandable.component.html',
  styleUrls: ['./custom-expandable.component.scss'],
})
export class CustomExpandableComponent
  extends AbstractModuleComponent
  implements OnInit {
  expandableItems: Array<ExpandableItems> = [];
  expandableDescription = '';

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.expandableItems = this.configuration?.expandableItems;
    this.expandableDescription = this.configuration?.expandableDescription;
  }
}
