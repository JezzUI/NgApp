import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, distinctUntilChanged, map, tap } from "rxjs";
import { User } from "./user.model";
import { HttpClient } from "@angular/common/http";
import { JwtService } from "./jwt.service";

@Injectable({ providedIn: "root" })
export class AuthService{
  private currentUserSubject = new BehaviorSubject<User| null>(null);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

    public isAuth = this.currentUser.pipe(map((user) => !!user));

    constructor(private route: Router, private http: HttpClient, private jwtService: JwtService){}
    loggedIn: boolean= false;

    loggingIn(){
        this.loggedIn = true;
    }
    logout(){
        this.loggedIn = false;
        this.route.navigate([""]);
    }
    isAuthenticated(){
        return this.loggedIn;
    }

    register(credentials: {
        username: string;
        email: string;
        password: string;
      }){
        return this.http.post("https://api.realworld.io/api/users", { user: credentials });
      }

      login(credentials: {
        email: string;
        password: string;
      }) {
        return this.http
          .post("https://api.realworld.io/api/users/login", { user: credentials });
      }
  
      setAuth(res: any): void {
        this.jwtService.saveToken(res.user.token);
        this.currentUserSubject.next(res.user);
      }
}