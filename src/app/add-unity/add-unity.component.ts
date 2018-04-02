import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-add-unity',
  templateUrl: './add-unity.component.html',
  styleUrls: ['./add-unity.component.css']
})
export class AddUnityComponent implements OnInit {
unity : any;
  constructor(public authService : AuthenticationService) { }

  ngOnInit() {
  }
  onSaveUnity( unity ){
this.authService.saveUnity(unity).subscribe( resp => {
  this.unity= resp;
}, err => {
console.log(err);
})
  }

}
