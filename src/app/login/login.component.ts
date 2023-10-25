import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subject, takeUntil } from 'rxjs';
// import { Errors } from '../error.model';

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
  
  errors:{ error: { errors: { [x: string]: any; }; }; };
  isSubmitting = false;
  authType: string;
  isSign:boolean = false;
  reactiveForm: FormGroup<AuthForm>;
  destroy$ = new Subject<void>();
  isLoading: boolean = false;
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
    this.isLoading = true;
    this.isSubmitting = true;
    this.reactiveForm.value;
    this.errors = { error: {errors:{}} };
    let observable =
      this.authType === "Login"
      ? this.userService.login(
        this.reactiveForm.value as { email: string; password: string }
      ) 
    : this.userService.register(
      this.reactiveForm.value as {
        email: string;
        password: string;
        username: string;
      }
    );

    observable.pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.userService.setAuth(res);
        this.userService.loggingIn();
        void this.route.navigate(["/"])
      },
      error: (err) => {
        this.errors = err;
        this.isLoading = false;
        this.isSubmitting = false;
      },
      complete: () => {
        this.isLoading = false; // Set loading to false when the API call is complete
      }

    });

  }

}


