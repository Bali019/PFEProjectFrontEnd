import {ChangeDetectionStrategy, Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {UnityService} from "../../unities/unity.service";
import {FormationService} from "../formation.service";
import {Location} from "@angular/common";
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {NgxStepperComponent, StepperOptions} from "ngx-stepper";
import {Unity} from "../../models/Unity";
import {Formation} from "../../models/Formation";

@Component({
  selector: 'app-formation-content',
  templateUrl: './formation-content.component.html',
  styleUrls: ['./formation-content.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FormationContentComponent implements OnInit {
  navigationSubscription;
  formation: any = {}
  unities: [Unity]
  idFormation: string
  test: string;


  constructor(private route: ActivatedRoute,
              private unityService: UnityService,
              private router: Router,
              private loc: Location,
              private formationService: FormationService,) {
    this.formation = new Formation();
  }

  public  ngOnInit(): void {
    this.idFormation = localStorage.getItem('idFormation');
      this.formationService.getFormation(this.idFormation).subscribe(resp => {
        this.formation = resp;
        console.log(this.formation.formationName)
        this.unities = this.formation.unities
      })
  }


}
