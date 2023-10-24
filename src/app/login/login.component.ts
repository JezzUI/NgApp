import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

interface AuthForm {
  username?: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  authType: string;
  isSign:boolean = false;
  reactiveForm: FormGroup<AuthForm>;
  constructor(private userService:AuthService, private route: Router, private activateroute: ActivatedRoute,){
    
  }
  ngOnInit(): void {
    this.reactiveForm = new FormGroup<AuthForm>({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });

   this.authType = this.activateroute.snapshot.url.at(-1)!.path;
   this.isSign = this.authType === "SignUp"? true:false;
  }

  onSubmit(){
    this.userService.register(
      this.reactiveForm.value as {
        email: string;
        password: string;
        username: string;
      }
    ).subscribe(res => {
      console.log(res, typeof res);
      this.userService.setAuth(res);
      this.userService.login();
    });

  }

}


