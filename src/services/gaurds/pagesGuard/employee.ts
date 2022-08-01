import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate {

  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const credentials = JSON.parse(localStorage.getItem('login_credentails')!)
        console.log(credentials)
        const permissions = credentials.permission
        let permssionGranted =permissions.forEach((items:string)=>{
            if(items === "Employee") {
                return true
            }else {
                return false
            }
        })

    if(permssionGranted === true ) {
        return true
    }else {
        alert("permission not granted")
        return false 

    }
         return true
    }
}
