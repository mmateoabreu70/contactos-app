import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterState, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../login/login.service";

@Injectable()
export class LoginGuard implements CanActivate, CanActivateChild {
    constructor(private loginService: LoginService, private router: Router) {}
    
    canActivate(route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.loginService.isAuthenticated()
            .then(
                (authenticated: boolean) => {
                    if (authenticated) {
                        return true;
                    } else {
                        this.router.navigate(['/']);
                    }

                    return false;
                }
            );
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, 
                     state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(childRoute, state);
    }

}