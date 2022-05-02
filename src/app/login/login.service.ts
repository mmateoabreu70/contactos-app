import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    loggedIn = false;

    isAuthenticated () {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 10);
            }
        );

        return promise;
    }

    logIn () {
        this.loggedIn = true;
    }

    logOut () {
        this.loggedIn = false;
    }
}