import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthService{


    constructor(private route: Router){

    }
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
}