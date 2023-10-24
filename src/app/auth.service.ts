import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { User } from "./user.model";
import { HttpClient } from "@angular/common/http";
import { JwtService } from "./jwt.service";

@Injectable({ providedIn: "root" })
export class AuthService{
    currentUserSubject: any;

    constructor(private route: Router, private http: HttpClient, private jwtService: JwtService){}
    loggedIn: boolean= false;

    login(){
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
  
      setAuth(res): void {
        this.jwtService.saveToken(res.name);
        //this.currentUserSubject.next(res);
      }
}