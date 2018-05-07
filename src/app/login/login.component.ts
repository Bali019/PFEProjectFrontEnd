import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {Location} from '@angular/common';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
mode: number = 0;

  constructor(public authService: AuthenticationService, private router: Router, private loc : Location, private userService : UserService) { }

  ngOnInit() {
    if(this.authService.isConnected()){
      this.loc.back();
    }
  }
onLogin(user){
    this.authService.login(user)
      .subscribe(resp =>{
let  jwt=resp.headers.get('Authorization');
        this.authService.saveToken(jwt);
        this.userService.updateOnLogin(user['username'])
        this.router.navigateByUrl('/formation');
      },error2 => {
this.mode=1;
      })
}
}
