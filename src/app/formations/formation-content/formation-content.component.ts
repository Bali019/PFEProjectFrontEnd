import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UnityService} from "../../unities/unity.service";
import {FormationService} from "../formation.service";
import {Location} from "@angular/common";
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {NgxStepperComponent, StepperOptions} from "ngx-stepper";
import {Unity} from "../../models/Unity";

@Component({
  selector: 'app-formation-content',
  template: `    
    <p><a [routerLink]="['unities',4]" class="btn btn-info" role="button">Next</a>
<router-outlet></router-outlet>
`,
  styleUrls: ['./formation-content.component.css']
})
export class FormationContentComponent implements OnInit {


  public campaign = false;
  formation: any = {}
  unities: any = []
  idFormation: string
  test: string;
  options : any = {
    "data-role" : "stepper"
  }
  constructor(private route: ActivatedRoute,
              private unityService: UnityService,
              private router: Router,
              private loc: Location,
              private formationService: FormationService,) {
  }

  public  ngOnInit(): void {
    this.idFormation = this.formationService.getFormationId();
    console.log(this.formationService.getFormationId() + "test now")
    this.unityService.getFormationUnities(this.idFormation).subscribe(resp => {
      this.unities = resp;
      //console.log(length)
      this.formationService.getFormation(this.idFormation).subscribe(resp=> {
        this.formation = resp;
      })
    })
  }



}
