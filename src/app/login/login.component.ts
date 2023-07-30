import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(
  ) {}

  destroy: boolean = true;
  showCourses: boolean = false;
  
  submit() {
    this.destroy=false;
    this.showCourses=true;
  }
}


