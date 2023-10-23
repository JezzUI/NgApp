import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { HoverDirective } from './eventshandler/hover.directives'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { CourseGuardService } from './course-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './canDeactivateGuard.service';
import { MyPipePipe } from './my-pipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
// import { NewappModule } from './newapp/newapp.module';




@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    SearchComponent,
    FilterComponent,
    HoverDirective,
    LoginComponent,
    ErrorComponent,
    CourseComponent,
    MyPipePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [CourseGuardService, AuthService, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
