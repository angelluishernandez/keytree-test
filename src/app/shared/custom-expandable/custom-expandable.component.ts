import { Component, OnInit } from '@angular/core';
import { AbstractModuleComponent } from '../abstract/abstract.module';

@Component({
  selector: 'app-custom-expandable',
  templateUrl: './custom-expandable.component.html',
  styleUrls: ['./custom-expandable.component.scss'],
})
export class CustomExpandableComponent
  extends AbstractModuleComponent
  implements OnInit {


  constructor() {
    super();
  }

  ngOnInit(): void {}
}
