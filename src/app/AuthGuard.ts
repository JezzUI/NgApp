import { inject } from "@angular/core";
import { Courses } from "./services/courses.service";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

export interface GlobalDeactivate{
    canExit: ()=> Observable<boolean> | Promise<boolean> | boolean;
}
export const resolve = () => {
    const courseSer: Courses = inject(Courses);
    return courseSer.fetchProd();
}

export const canActivate = () => {
    const authService: AuthService = inject(AuthService);
    const route: Router = inject(Router)
    if (authService.isAuthenticated()) {
        return true;
    }
    else {
        route.navigate(["/Login"]);
        return false;

    }
}
export const canActivateChild = () => {
    return canActivate();
}

export const Deactivate =(component: GlobalDeactivate)=>{

    return component.canExit();
}