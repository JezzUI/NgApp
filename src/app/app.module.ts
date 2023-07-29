import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { HoverDirective } from './eventshandler/hover.directives'; 
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

const appRoute: Routes = [
  {path: 'courses', component: CoursesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HeaderComponent,
    SearchComponent,
    FilterComponent,
    HoverDirective,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
