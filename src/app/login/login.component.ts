import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
mode: number = 0;
  constructor(private authService: AuthenticationService, private router: Router, private loc : Location) { }

  ngOnInit() {
    if(this.authService.isConnected()){
      this.loc.back();
    }
  }
onLogin(user){


    this.authService.login(user)
      .subscribe(resp =>{
let  jwt=resp.headers.get('Authorization');
// console.log(jwt);
        this.authService.saveToken(jwt);
        this.router.navigateByUrl('/user');
      },error2 => {
this.mode=1;
      })
}
}
