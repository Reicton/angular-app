import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class TimeGuard implements CanActivate {
    constructor(private router: Router) {

    }
    canActivate() {
        console.log('时间检验');
        let time = new Date().getHours();
        if (time >= 15 && time < 24) {
            return true
        } else {
            alert('现在还不是访问时间,请三点之后再来')
            this.router.navigateByUrl('/home')
            return false
        }
    }
}