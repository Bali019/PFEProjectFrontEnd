import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UnityService} from "../../unities/unity.service";
import {Location} from "@angular/common";
import {FormationService} from "../formation.service";
import {Unity} from "../../models/Unity";
import {forEach} from "@angular/router/src/utils/collection";
import {Observable} from "rxjs/Observable";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { DomSanitizer } from '@angular/platform-browser';

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
  x : boolean = true;
  safeURL
  videoURL="https://www.youtube.com/embed/HC1fKHTvwHo"


  constructor(private route: ActivatedRoute,
              private unityService: UnityService,
              private router: Router,
              private loc: Location,
              private formationService: FormationService,
              private _sanitizer: DomSanitizer) {

    this.firstU = new Unity();
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }

  ngOnInit() {
    let timer = TimerObservable.create(1000, 1000);
    timer.subscribe(t=> {
      //console.log(t)
      this.x=false;});
    this.idFormation = this.route.snapshot.paramMap.get('idF');
    this.formationService.setFormationId(this.idFormation);
    localStorage.setItem('idFormation',this.idFormation );
    this.formationService.getFormation(this.idFormation).subscribe(resp => {
      this.formation= resp;
      this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.formation.videoUrl);
    })
    this.unityService.getFormationUnities(this.idFormation).subscribe(resp=>{
      this.unities=resp;


    })
  }
deleteUnity(id){
    this.unityService.deleteUnity(id).subscribe(resp => {
      console.log(resp)
      this.ngOnInit()
    })
}
}
