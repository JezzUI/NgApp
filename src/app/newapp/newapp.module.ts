import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewappComponent } from './newapp/newapp.component';
import { NewappdirDirective } from './newappdir.directive';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'newAppComp', component: NewappComponent }
  // Add other components...
];

@NgModule({
  declarations: [
    NewappComponent,
    NewappdirDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NewappComponent,
    RouterModule
    // other exports
  ]
})


export class NewappModule { }
