import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.css']
})
export class UnityComponent implements OnInit {
unitys;
  constructor(public authService : AuthenticationService, private router : Router) { }

  ngOnInit() {
    this.authService.getUnitys()
      .subscribe(data=>{
        this.unitys = data;
      }, error2 => {
        this.authService.logout();
        this.router.navigateByUrl('/login');
      })
  }
onNewUnity(){
    this.router.navigateByUrl('/add-unity');
}
}
