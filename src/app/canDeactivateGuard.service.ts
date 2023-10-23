import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { Observable } from "rxjs";

export interface GlobalDeactivate{
    canExit: ()=> Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard{

    canDeactivate(component: GlobalDeactivate){

            return component.canExit();
            
}

}