import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {UnityService} from "../unity.service";
import {UserService} from "../../../services/user.service";
import {User} from "../../models/user";
import {Unity} from "../../models/Unity";
import {FormationService} from "../../formations/formation.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-unitiesList',
  templateUrl: './unitiesList.component.html',
  styleUrls: ['./unitiesList.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UnitiesListComponent implements OnInit {

  @Input() orderUnity: any = {}
  /*
   test: any = [{"name": "a"}, {"name": "a"}, {"name": "a"}, {"name": "a"}, {"name": "a"}, {"name": "a"}, {"name": "a"}, {"name": "a"}, {"name": "a"}]
   */
  unities: any = []
  currentUnity: any = {}
  username: String
  idFormation : any ;
  firstU : any = []
  idCurrentUnity : any
  constructor(private unityService: UnityService, private userService: UserService,
              private formationService: FormationService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.idFormation = this.formationService.getFormationId();
    this.idFormation = localStorage.getItem('idFormation');
    this.idCurrentUnity = this.route.snapshot.paramMap.get('idU');
      this.unityService.getFormationUnities(this.idFormation ).subscribe(data2 => {
        this.unities = data2;
        let i=0;
        for (let u of this.unities){
          this.firstU[u.orderU] = u.unityId
          i++;
        }
        console.log("===>"+this.firstU.indexOf(+this.idCurrentUnity));
      })

  }
}
