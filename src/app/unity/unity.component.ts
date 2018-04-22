import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {ActivatedRouteSnapshot, Router, RouterState, RouterStateSnapshot} from "@angular/router";
import {Location} from '@angular/common';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.css']
})
export class UnityComponent implements OnInit {
unitys;
  constructor(public authService : AuthenticationService, private router : Router,private loc : Location) { }

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
