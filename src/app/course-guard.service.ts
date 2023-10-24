import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
@Injectable()
export class CourseGuardService {

    constructor(private route: Router, private authService: AuthService){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

        if(this.authService.isAuthenticated()){
            return true;
        }
        else{
            this.route.navigate(["/Login"]);
            return false;
        
        }
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        return this.canActivate(route,state);
    }
}