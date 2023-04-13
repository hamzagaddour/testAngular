
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { User } from "./user.interface";


@Injectable({
  providedIn: 'root',
})
export class AuthGuard {




  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): User{
    return {
      id : 4,
      nom : "hello",
      prenom : "hdoih",
      profession : "hbbfhf"
    }
  }



}
