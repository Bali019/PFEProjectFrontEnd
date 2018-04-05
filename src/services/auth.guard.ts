import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {AuthenticationService} from "./authentication.service";
/**
 * Created by Majdi Bali on 03/04/2018.
 */
@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private auth : AuthenticationService,
  private router: Router){

  }
  /*  canActivate ( route: ActivatedRouteSnapshot,
  state:RouterStateSnapshot) : Observable<boolean>{

   this.auth.authInfo$
      .map(authInfo => authInfo.isConnected()).takeRecords(1)
      .do(allowed =>{
        if (!allowed){
          this.router.navigate([`/login`])
        }
      } );
    return undefined ;

    return null;
  }*/
  canActivate(){
    if(localStorage.getItem("access_token")!=null){
      return true
    }
    return false;
  }
}
