import { Component, VERSION, ViewEncapsulation, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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

  constructor(private router: Router, courses: Courses, private authService:AuthService) {
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

  logIn(){
    this.authService.loggingIn();
  }

  logOut(){
    this.authService.logout(); 
  }
}


