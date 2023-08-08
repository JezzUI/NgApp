import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDeactivate } from '../canDeactivateGuard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, GlobalDeactivate {

  fName: any;
  lName: any;
  country: any;
  subject: any;
  submit: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ProcessForm(){
    //Write logic to process the form
    this.router.navigate(['About']);
  }

  canExit(){
    if(!this.submit){
    if(this.fName || this.lName || this.country || this.subject){
      return confirm("You have some unsaved changes, Do you really want to discard the changes?")
      
    }
    else{
      return true;
    }
  }
    else{
      return true;
    }
  }

  submitt(){

    this.submit= true;

  }



}
