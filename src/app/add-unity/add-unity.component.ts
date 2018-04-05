import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-unity',
  templateUrl: './add-unity.component.html',
  styleUrls: ['./add-unity.component.css']
})
export class AddUnityComponent implements OnInit {
unity : any;
  constructor(public authService : AuthenticationService, private  router : Router) { }

  ngOnInit() {
  if (!this.authService.isConnected()){
    this.router.navigateByUrl('/login');
  }
  }
  onSaveUnity( unity ){
this.authService.saveUnity(unity).subscribe( resp => {
  this.unity= resp;
}, err => {
console.log(err);
})
  }

}
