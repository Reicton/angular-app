import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    private login = true
    canActivate() {
        console.log('登录检验');
        return this.login
    }
}