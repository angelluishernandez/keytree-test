import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  username: FormControl = new FormControl('', Validators.required);
  isLoading = false;

  constructor(private router: Router) {}

  /**
   * Everytime we reload the page the app will navigate to
   * its root in order to clear up the search box and avoid making
   * unnecessary requests to the server
   */

  ngOnInit(): void {
    this.router.navigate(['/']);
    this.subscribeToRouterEvents();
  }

  /**
   * A suscription to detect when the application is changing routes.
   * The resolver will take some time to complete and then to redirect to
   * its destiny, so we use this time to display a spinner until the resolve
   * is finished
   *
   * @see UserReposResolver
   */
  subscribeToRouterEvents(): void {
    // tslint:disable-next-line: deprecation
    this.router.events.subscribe({
      next: (event: Event) => {
        switch (true) {
          case event instanceof NavigationStart:
            {
              this.isLoading = true;
            }

            break;
          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            this.isLoading = false;
            break;
          }
          default:
            break;
        }
      },
      error: (error) => console.error(error),
      complete: () => console.log('Request completed'),
    });
  }

  /**
   *
   * @param optionChosen Depending on the button we click we pass
   * a string that will lead us to the route in which the information
   * will be displayed.
   *
   * Each of these routes has a resolver that retrieves the information
   * by calling the service.
   */

  handleSubmit(optionChosen: string): void {
    if (this.username.invalid) {
      console.log('No username was provided');
      return;
    }
    switch (optionChosen) {
      case 'user':
        this.router.navigate(['/user-repos', this.username.value]);
        break;
      case 'organizations':
        this.router.navigate(['/user-organizations', this.username.value]);
        break;
      default:
        break;
    }
  }
}
