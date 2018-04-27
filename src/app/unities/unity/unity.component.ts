import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {
  ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router, RouterState,
  RouterStateSnapshot
} from "@angular/router";
import {Location} from '@angular/common';
import {Observable} from "rxjs/Observable";
import {UnityService} from "../unity.service";

@Component({
  selector: 'app-unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.css']
})
export class UnityComponent implements OnInit {
unity : any ={};
idTest : string;
  constructor(private route: ActivatedRoute,public unityService : UnityService, private router : Router,private loc : Location) { }

  ngOnInit() {

/*    this.authService.getUnitys()
      .subscribe(data=>{
        this.unities = data;
      }, error2 => {
        this.authService.logout();
        this.router.navigateByUrl('/login');
      })*/
    this.idTest = this.route.snapshot.paramMap.get('id');
        this.unityService.getUnity(this.idTest).subscribe(resp => {
          this.unity=resp
        }, error2 => {console.log("not found bali")});

    console.log(this.idTest)
/*this.unityService.getUnity(3).subscribe(resp => {
  this.unity=resp
}, error2 => {console.log("not found bali")})*/





  }
onNewUnity(){
    this.router.navigateByUrl('/add-unities');
}
}
