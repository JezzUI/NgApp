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
import { LoginComponent } from './login/login.component';
import { canActivate, canActivateChild, Deactivate, resolve } from './AuthGuard';
import { CheckoutComponent } from './checkout/checkout.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent, canActivate: [canActivate] },
  { path: 'Contact', canDeactivate: [Deactivate], component: ContactComponent, canActivateChild: [canActivateChild] },
  { path: 'Courses', component: CoursesComponent, resolve: { allCourses: resolve } },
  { path: 'About/Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'SignUp', component: LoginComponent },
  // {path: 'Courses/Course/:id', component: CourseComponent},
 
  {
    path: 'Courses',
    children: [
      { path: 'Course/BuyNow', component: CheckoutComponent , data:{}},
      { path: 'Course/:id', component: CourseComponent },
    ]
  },
  { path: '**', component: ErrorComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
