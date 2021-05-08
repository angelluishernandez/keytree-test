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
  userRoute = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.userRoute = `/user-repos/${this.activatedRoute.snapshot.params.username}`;
  }

  navigateToUserRepos(): void {
    this.router.navigate([this.userRoute]);
  }
}
