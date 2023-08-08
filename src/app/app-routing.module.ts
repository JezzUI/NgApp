import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { CourseGuardService } from './course-guard.service';
import { CanDeactivateGuard } from './canDeactivateGuard.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contact', canDeactivate:[CanDeactivateGuard], component: ContactComponent},
  {path: 'Courses',component: CoursesComponent},
  {path: 'About/Home', component: HomeComponent},
  //{path: 'Courses/Course/:id', component: CourseComponent},
  {path: 'Courses', canActivateChild: [CourseGuardService], children:[{
    path: 'Course/:id', component: CourseComponent,
  }]},
  {path: '**', component: ErrorComponent}
] 

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
