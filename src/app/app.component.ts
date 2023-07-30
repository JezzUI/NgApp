import { Component, VERSION } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Courses } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Courses]
})
export class AppComponent {

  title = 'CustomBindings';
  name = 'Angular ' + VERSION.major;
  showHeader: boolean = true;

  constructor(private router: Router, courses: Courses) {
    courses.courses.length;
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/' || val.url == '/login') {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    });
  }
}
