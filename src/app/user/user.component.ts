import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
  constructor(public auth: AuthenticationService, private router:Router){}
    ngOnInit(){
    if (!this.auth.isConnected()){
      this.router.navigateByUrl('/login');
    }
    }
}
