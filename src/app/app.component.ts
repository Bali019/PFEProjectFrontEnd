import { Component } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth:AuthenticationService, private router: Router){

  }
  title = 'app';
  onLogout(){
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
