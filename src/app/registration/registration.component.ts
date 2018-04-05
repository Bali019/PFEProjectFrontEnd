import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {RegistrationService} from "../../services/registration.service";
import {User} from "../models/user";
import {Router} from "@angular/router";
declare var $:any;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
user : any ;
mode : number = 0;
msg : string ;
  constructor(private regService : RegistrationService, private router : Router) { }

  ngOnInit() {
   /**this.showNotification();*/
  }
  /**showNotification(){
    var type = ['','info','success','warning','danger'];

    var color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "ti-gift",
      message: "<div style='text-align: center'>Welcome to <b>Sopra E-Learning<b></b></div> <br>Create your account" +
      "<div> <input type='text'></div>"
    },{
      type: 'info',
      timer: null,
      placement: {
        from: 'top',
        align: 'center'
      }
    });
  }**/
  onSave(user){
    this.regService.saveUser(user).subscribe( resp => {
      this.user= resp;
      console.log("added");
      this.router.navigateByUrl('/login');
    }, err => {
      this.msg = err.error.message ;
      this.mode = 1;
      console.log(err);
    });
  }
}
