import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UnityService} from "../../unities/unity.service";
import {Location} from "@angular/common";
import {FormationService} from "../formation.service";
import {Unity} from "../../models/Unity";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-formation-accueil',
  templateUrl: './formation-accueil.component.html',
  styleUrls: ['./formation-accueil.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FormationAccueilComponent implements OnInit {
  formation: any = {}
  unities : any = [Unity]
  idFormation: string
  firstU : any = []

  constructor(private route: ActivatedRoute,
              private unityService: UnityService,
              private router: Router,
              private loc: Location,
              private formationService: FormationService) {
    this.firstU = new Unity();
  }

  ngOnInit() {
    this.idFormation = this.route.snapshot.paramMap.get('idF');
    this.formationService.setFormationId(this.idFormation);
    localStorage.setItem('idFormation',this.idFormation );
    this.formationService.getFormation(this.idFormation).subscribe(resp => {
      this.formation= resp;
    })
    this.unityService.getFormationUnities(this.idFormation).subscribe(resp=>{
      this.unities=resp;

    })
  }

}
