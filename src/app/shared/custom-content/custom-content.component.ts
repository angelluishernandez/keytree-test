import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractModuleComponent } from '../abstract/abstract.module';

@Component({
  selector: 'app-custom-content',
  templateUrl: './custom-content.component.html',
  styleUrls: ['./custom-content.component.scss'],
})
export class CustomContentComponent
  extends AbstractModuleComponent
  implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    super();
  }

  ngOnInit(): void {
  }

  navigateTo(url: string): void {
    this.router.navigate([url, this.activatedRoute.snapshot.params.username]);
  }
}
