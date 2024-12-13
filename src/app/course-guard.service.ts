import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { inject, Injectable } from "@angular/core";
import { Course } from "./courses/course";
import { Observable } from "rxjs";
import { Courses } from "./services/courses.service";
@Injectable()
export class CourseGuardService  { 

    constructor(private route: Router, private authService: AuthService){

    }
    courseSer : Courses = inject(Courses);
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course[] | Observable<Course[]> | Promise<Course[]> {
        
        return this.courseSer.fetchProd();
    }
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

    //     if(this.authService.isAuthenticated()){
    //         return true;
    //     }
    //     else{
    //         this.route.navigate(["/Login"]);
    //         return false;
        
    //     }
    // }
    // canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    //     return this.canActivate(route,state);
    // }
}