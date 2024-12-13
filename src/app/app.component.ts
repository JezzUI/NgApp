import { Component, VERSION, ViewEncapsulation, inject } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Courses } from './services/courses.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Courses],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {

  title = 'CustomBindings';
  name = 'Angular ' + VERSION.major;
  showHeader: boolean = true;
  currentUser$ = inject(AuthService).currentUser;
  isLoading: boolean = false;
  route: Router = inject(Router);
  constructor(private router: Router, courses: Courses, private authService: AuthService) {
    // courses.courses.length;
    // router.events.subscribe((val) => {
    //   if (val instanceof NavigationEnd) {
    //     if (val.url == '/' || val.url == '/login') {
    //       this.showHeader = false;
    //     } else {
    //       this.showHeader = true;
    //     }
    //   }
    // });


  }

  ngOnInit() {
    this.route.events.subscribe((currentEvent: Event) => {
      if (currentEvent instanceof NavigationStart) this.isLoading = true;
      else if (currentEvent instanceof NavigationEnd || currentEvent instanceof NavigationCancel) this.isLoading = false;
    })
  }

  logIn() {
    this.authService.loggingIn();
  }

  logOut() {
    this.authService.logout();
  }
}


