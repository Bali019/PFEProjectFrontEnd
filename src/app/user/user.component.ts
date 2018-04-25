import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../models/user";

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
  currentUser : any ={
  }
  username : any;
  user : any;
  constructor(public auth: AuthenticationService, private router:Router, private userService : UserService){
    this.currentUser = new User() ;
  }
    ngOnInit(){
    if (!this.auth.isConnected()){
      this.router.navigateByUrl('/login');
    }
    this.userService.getUser().subscribe(data =>{this.currentUser = data })
 /*     for(let u of this.currentUser.unities ){
        console.log(u.description);
      }*/
  }
  onUpdateUser(){
     // console.log(userU);
    console.log(this.currentUser);
    this.userService.updateUser(this.currentUser);

  }
}
